/**
 * Utility functions for working with Strapi CMS data
 */

// Get runtime config if in Nuxt environment
let strapiUrl = 'http://localhost:1337';

// Check if we're in a Nuxt environment
if (typeof useRuntimeConfig === 'function') {
  try {
    const config = useRuntimeConfig();
    strapiUrl = config.public.strapiUrl;
  } catch (error) {
    console.warn('Unable to access Nuxt runtime config, using default Strapi URL');
  }
}

/**
 * Get the full URL for a Strapi media item
 * @param {Object|null} media - The media object from Strapi API
 * @param {string} fallbackUrl - Fallback URL to use if media is null or invalid
 * @returns {string} - The full URL to the media item or fallback URL
 */
export function getStrapiMediaUrl(media, fallbackUrl = '') {
  if (!media || !media.data || !media.data.attributes) {
    return fallbackUrl;
  }

  const { url } = media.data.attributes;
  
  // If the URL is already absolute, return it as is
  if (url.startsWith('http')) {
    return url;
  }

  // Otherwise, prepend the Strapi URL
  return `${strapiUrl}${url}`;
}

/**
 * Get the value from a Strapi API response with fallback
 * @param {Object} data - The data object from Strapi API
 * @param {string} path - Dot notation path to the desired value
 * @param {any} fallback - Fallback value if path doesn't exist
 * @returns {any} - The value at the specified path or fallback
 */
export function getStrapiValue(data, path, fallback = '') {
  if (!data) return fallback;
  
  const keys = path.split('.');
  let value = data;
  
  for (const key of keys) {
    if (value === undefined || value === null) {
      return fallback;
    }
    value = value[key];
  }
  
  return value !== undefined && value !== null ? value : fallback;
}

/**
 * Parse Strapi API response to get attributes
 * @param {Object} response - The response from Strapi API
 * @returns {Object} - The attributes object or empty object if invalid
 */
export function parseStrapiResponse(response) {
  if (!response || !response.data || !response.data.attributes) {
    return {};
  }
  
  return response.data.attributes;
}

/**
 * Parse Strapi API collection response to get array of attributes
 * @param {Object} response - The collection response from Strapi API
 * @returns {Array} - Array of attribute objects or empty array if invalid
 */
export function parseStrapiCollection(response) {
  if (!response || !response.data || !Array.isArray(response.data)) {
    return [];
  }
  
  return response.data.map(item => item.attributes || {});
}

/**
 * Find a service by slug in a collection of services
 * @param {Array} services - Array of service objects
 * @param {string} slug - The slug to search for
 * @returns {Object|null} - The service object or null if not found
 */
export function findServiceBySlug(services, slug) {
  if (!Array.isArray(services) || !slug) {
    return null;
  }
  
  return services.find(service => service.slug === slug) || null;
}

/**
 * Convert Strapi rich text to plain text
 * @param {string} richText - Rich text from Strapi
 * @returns {string} - Plain text version
 */
export function richTextToPlainText(richText) {
  if (!richText) return '';
  
  // Simple conversion - remove HTML tags
  return richText.replace(/<[^>]*>/g, '');
}

/**
 * Get SEO metadata from a service
 * @param {Object} service - Service object from Strapi
 * @returns {Object} - SEO metadata object
 */
export function getServiceSeoMetadata(service) {
  if (!service || !service.seo) {
    return {
      title: 'OMA Manufacturing Services',
      description: 'Servicios de manufactura de alta precisión'
    };
  }
  
  return {
    title: service.seo.title || 'OMA Manufacturing Services',
    description: service.seo.description || 'Servicios de manufactura de alta precisión'
  };
}

/**
 * Format date from Strapi (ISO string) to localized date
 * @param {string} isoDate - ISO date string from Strapi
 * @param {string} locale - Locale for formatting (default: 'es-MX')
 * @returns {string} - Formatted date string
 */
export function formatStrapiDate(isoDate, locale = 'es-MX') {
  if (!isoDate) return '';
  
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}
