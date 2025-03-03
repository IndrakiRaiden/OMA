// models/IndustryModel.js
/**
 * This file defines the structure of the Industry data model
 * that will be used to map data to Vue components
 */

import { getStrapiMediaUrl, getStrapiValue, parseStrapiResponse } from '../utils/strapi';

export class IndustryModel {
  constructor(data) {
    const attributes = data?.attributes || {};
    
    // Basic industry information
    this.id = data?.id || null;
    this.slug = attributes.slug || '';
    this.title = attributes.title || '';
    this.subtitle = attributes.subtitle || '';
    this.description = attributes.description || '';
    
    // Banner section
    this.banner = {
      title: getStrapiValue(attributes, 'banner.title', ''),
      subtitle: getStrapiValue(attributes, 'banner.subtitle', ''),
      buttons: getStrapiValue(attributes, 'banner.buttons', [
        { text: 'Ver Detalles', href: '#detalles', class: 'primary-btn' },
        { text: 'Cotizar', href: '/cotiza', class: 'secondary-btn' }
      ])
    };
    
    // Details section
    this.details = {
      titlePrefix: getStrapiValue(attributes, 'details.titlePrefix', 'Soluciones para'),
      titleHighlight: getStrapiValue(attributes, 'details.titleHighlight', ''),
      description: getStrapiValue(attributes, 'details.description', ''),
      features: getStrapiValue(attributes, 'details.features', []),
      imageUrl: getStrapiMediaUrl(getStrapiValue(attributes, 'details.image', null), '')
    };
    
    // Capabilities section
    this.capabilities = {
      titlePrefix: getStrapiValue(attributes, 'capabilities.titlePrefix', 'Nuestras'),
      titleHighlight: getStrapiValue(attributes, 'capabilities.titleHighlight', 'Capacidades'),
      description: getStrapiValue(attributes, 'capabilities.description', ''),
      capacities: getStrapiValue(attributes, 'capabilities.capacities', [])
    };
    
    // Process section
    const processSteps = getStrapiValue(attributes, 'process.steps', []);
    this.process = {
      titlePrefix: getStrapiValue(attributes, 'process.titlePrefix', 'Nuestro'),
      titleHighlight: getStrapiValue(attributes, 'process.titleHighlight', 'Proceso'),
      description: getStrapiValue(attributes, 'process.description', ''),
      steps: processSteps.map(step => ({
        ...step,
        imageUrl: getStrapiMediaUrl(step.image, '')
      })),
      commitmentTitle: getStrapiValue(attributes, 'process.commitmentTitle', 'Nuestro Compromiso con la Calidad'),
      commitments: getStrapiValue(attributes, 'process.commitments', [])
    };
    
    // Gallery section
    const galleryItems = getStrapiValue(attributes, 'gallery.items', []);
    this.gallery = {
      titlePrefix: getStrapiValue(attributes, 'gallery.titlePrefix', 'Nuestra'),
      titleHighlight: getStrapiValue(attributes, 'gallery.titleHighlight', 'Galería'),
      description: getStrapiValue(attributes, 'gallery.description', ''),
      showMoreButtonText: getStrapiValue(attributes, 'gallery.showMoreButtonText', 'Mostrar más'),
      galleryItems: galleryItems.map(item => ({
        ...item,
        imageUrl: getStrapiMediaUrl(item.image, '')
      })),
      galleryCategories: getStrapiValue(attributes, 'gallery.categories', [])
    };
    
    // CTA section
    this.cta = {
      title: getStrapiValue(attributes, 'cta.title', '¿Necesita nuestros servicios?'),
      subtitle: getStrapiValue(attributes, 'cta.subtitle', 'Contáctenos hoy mismo para discutir su proyecto y obtener una cotización personalizada.'),
      buttonText: getStrapiValue(attributes, 'cta.buttonText', 'Solicitar cotización'),
      buttonLink: getStrapiValue(attributes, 'cta.buttonLink', '/cotiza')
    };
    
    // SEO metadata
    this.seo = {
      title: getStrapiValue(attributes, 'seo.title', `${this.title} | OMA - Servicios de Manufactura`),
      description: getStrapiValue(attributes, 'seo.description', this.description)
    };
  }
  
  /**
   * Create an IndustryModel instance from Strapi API response
   * @param {Object} response - The response from Strapi API
   * @returns {IndustryModel} - A new IndustryModel instance
   */
  static fromApiResponse(response) {
    if (!response || !response.data) {
      console.warn('Invalid API response for industry data');
      return new IndustryModel({});
    }
    
    return new IndustryModel(response.data);
  }
  
  /**
   * Create multiple IndustryModel instances from a collection API response
   * @param {Object} response - The collection response from Strapi API
   * @returns {Array<IndustryModel>} - Array of IndustryModel instances
   */
  static fromCollectionResponse(response) {
    if (!response || !response.data || !Array.isArray(response.data)) {
      console.warn('Invalid API collection response for industries');
      return [];
    }
    
    return response.data.map(item => new IndustryModel(item));
  }
  
  /**
   * Get default industry data for fallback
   * @param {string} slug - Industry slug
   * @returns {Object} - Default industry data
   */
  static getDefaultData(slug) {
    return {
      id: null,
      attributes: {
        slug: slug || '',
        title: 'Industria',
        subtitle: 'Descripción de la industria',
        description: 'Información detallada sobre las soluciones para esta industria.',
        // Default values for other sections would be provided by the constructor
      }
    };
  }
}

export default IndustryModel;
