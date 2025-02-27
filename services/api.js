// services/api.js
import axios from 'axios';
import ServiceModel from '../models/ServiceModel';

// Get runtime config if in Nuxt environment
let strapiApiUrl = 'http://localhost:1337/api';
let strapiUrl = 'http://localhost:1337';

// Check if we're in a Nuxt environment
if (typeof useRuntimeConfig === 'function') {
  try {
    const config = useRuntimeConfig();
    strapiApiUrl = config.public.strapiApiUrl;
    strapiUrl = config.public.strapiUrl;
  } catch (error) {
    console.warn('Unable to access Nuxt runtime config, using default Strapi URLs');
  }
}

/**
 * Create a base axios instance for Strapi API
 */
const strapiAPI = axios.create({
  baseURL: strapiApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Handle API errors consistently
 * @param {Error} error - The error object from axios
 * @param {string} context - Context where the error occurred
 * @returns {null} - Returns null to indicate error
 */
const handleApiError = (error, context) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(`${context} - Server error:`, error.response.status, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(`${context} - Network error:`, error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`${context} - Request error:`, error.message);
  }
  
  return null;
};

/**
 * Get service data by slug
 * @param {string} slug - The service slug
 * @returns {Promise<Object|null>} - Service data or null if error
 */
export const getServiceData = async (slug) => {
  try {
    const response = await strapiAPI.get(`/services/${slug}`, {
      params: {
        populate: 'deep',
      },
    });
    
    return response.data;
  } catch (error) {
    return handleApiError(error, `Error fetching service data for ${slug}`);
  }
};

/**
 * Get service data by slug and return as ServiceModel
 * @param {string} slug - The service slug
 * @returns {Promise<ServiceModel>} - ServiceModel instance
 */
export const getServiceModel = async (slug) => {
  try {
    const response = await getServiceData(slug);
    
    if (!response) {
      console.warn(`No data found for service: ${slug}, using default data`);
      return new ServiceModel(ServiceModel.getDefaultData(slug));
    }
    
    return ServiceModel.fromApiResponse(response);
  } catch (error) {
    console.error(`Error creating ServiceModel for ${slug}:`, error);
    return new ServiceModel(ServiceModel.getDefaultData(slug));
  }
};

/**
 * Get all services with basic information
 * @returns {Promise<Array>} - Array of service data objects or empty array if error
 */
export const getAllServices = async () => {
  try {
    const response = await strapiAPI.get('/services', {
      params: {
        populate: ['thumbnail', 'banner'],
        sort: 'order:asc',
      },
    });
    
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error fetching all services');
  }
};

/**
 * Get all services as ServiceModel instances
 * @returns {Promise<Array<ServiceModel>>} - Array of ServiceModel instances
 */
export const getAllServiceModels = async () => {
  try {
    const response = await getAllServices();
    
    if (!response) {
      console.warn('No services found, returning empty array');
      return [];
    }
    
    return ServiceModel.fromCollectionResponse(response);
  } catch (error) {
    console.error('Error creating ServiceModels:', error);
    return [];
  }
};

/**
 * Get featured services
 * @param {number} limit - Maximum number of services to return
 * @returns {Promise<Array>} - Array of featured service data
 */
export const getFeaturedServices = async (limit = 3) => {
  try {
    const response = await strapiAPI.get('/services', {
      params: {
        populate: ['thumbnail', 'banner'],
        filters: {
          featured: {
            $eq: true
          }
        },
        sort: 'order:asc',
        pagination: {
          limit
        }
      },
    });
    
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error fetching featured services');
  }
};

/**
 * Get homepage data
 * @returns {Promise<Object|null>} - Homepage data or null if error
 */
export const getHomepageData = async () => {
  try {
    const response = await strapiAPI.get('/homepage', {
      params: {
        populate: 'deep',
      },
    });
    
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error fetching homepage data');
  }
};

/**
 * Get global site settings
 * @returns {Promise<Object|null>} - Global settings or null if error
 */
export const getGlobalSettings = async () => {
  try {
    const response = await strapiAPI.get('/global', {
      params: {
        populate: 'deep',
      },
    });
    
    return response.data;
  } catch (error) {
    return handleApiError(error, 'Error fetching global settings');
  }
};

export default strapiAPI;
