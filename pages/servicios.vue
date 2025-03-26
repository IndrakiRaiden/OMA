<template>
  <main class="services-page">
    <BannerV2 
      title="Nuestros Servicios" 
      subtitle="Soluciones integrales de manufactura CNC"
      :buttons="[
        { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
        { text: 'Cotizar', href: '/cotiza', class: 'secondary-btn' }
      ]"
    />
    
    <!-- Services Section -->
    <section id="servicios" class="services-section py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">SERVICIOS PRINCIPALES DE OMA</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de manufactura y producción, respaldados por años de experiencia y tecnología de punta.
          </p>
        </div>
        
        <!-- Loading and error states -->
        <div v-if="loading" class="mb-8 p-4 bg-blue-100 rounded text-center">
          <p>Cargando servicios...</p>
        </div>
        
        <div v-if="error" class="mb-8 p-4 bg-red-100 rounded text-center">
          <p class="text-red-700">{{ error }}</p>
        </div>
        
        <!-- Services grid -->
        <div v-if="services.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service card (inline implementation) -->
          <div v-for="service in services" :key="service.id" class="service-card group">
            <!-- Service image -->
            <div class="card-image" :style="{ backgroundImage: `url(${getImageUrl(service)})` }">
              <div class="image-overlay"></div>
              <div class="icon-wrapper">
                <i :class="['fas', service.attributes?.icon || 'fa-wrench']"></i>
              </div>
            </div>
            
            <!-- Service content -->
            <div class="card-content">
              <h3 class="title">{{ service.titulo || service.attributes?.titulo || 'Servicio' }}</h3>
              <p class="description">
                {{ getServiceDescription(service) }}
              </p>
              
              <!-- Features list -->
              <div v-if="getFeatures(service).length > 0" class="features-list">
                <div v-for="(feature, index) in getFeatures(service)" :key="index" 
                     class="feature-item"
                     :style="{ animationDelay: `${index * 100}ms` }">
                  <div class="feature-icon">
                    <i class="fas fa-check"></i>
                  </div>
                  <span>{{ feature }}</span>
                </div>
              </div>

              <!-- Button to open service detail modal -->
              <button @click="openServiceDetail(service)" class="learn-more group">
                <span class="btn-text">Más Información</span>
                <span class="btn-icon">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Fallback if no services found -->
        <div v-else-if="!loading && !error" class="text-center p-8 bg-gray-100 rounded">
          <p>No se encontraron servicios disponibles.</p>
        </div>
      </div>
    </section>

    <FeaturesSection :features="features" />
    <TestimonialsSection :testimonials="testimonials" />
    <CTASection />
    
    <!-- Service Detail Modal -->
    <div v-if="selectedService && showModal" class="service-detail-modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-container">
        <button class="modal-close-btn" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        
        <!-- Modal Content -->
        <div class="modal-content">
          <!-- Service Hero -->
          <div class="modal-hero" :style="{ backgroundImage: `url(${getImageUrl(selectedService)})` }">
            <div class="hero-overlay"></div>
            <div class="hero-content">
              <div class="service-icon">
                <i class="fas fa-wrench"></i>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">
                {{ selectedService.titulo || selectedService.attributes?.titulo || 'Servicio' }}
              </h2>
            </div>
          </div>
          
          <!-- Service Details -->
          <div class="modal-body">
            <div class="service-description">
              <h3 class="text-2xl font-bold mb-4">Descripción del Servicio</h3>
              
              <!-- Rich Text Description -->
              <div class="rich-text-content mb-6">
                <div v-if="selectedService.attributes?.descripcion && Array.isArray(selectedService.attributes.descripcion)">
                  <div v-for="(block, index) in selectedService.attributes.descripcion" :key="index" class="mb-4">
                    <!-- Paragraph -->
                    <p v-if="block.type === 'paragraph'" class="text-lg text-gray-700 leading-relaxed mb-4">
                      {{ block.children && block.children.length > 0 ? block.children[0]?.text || '' : '' }}
                    </p>
                    
                    <!-- Heading -->
                    <h4 v-else-if="block.type === 'heading'" class="text-xl font-bold text-gray-800 mb-3">
                      {{ block.children && block.children.length > 0 ? block.children[0]?.text || '' : '' }}
                    </h4>
                    
                    <!-- List -->
                    <ul v-else-if="block.type === 'list'" class="features-list-modal">
                      <li v-for="(item, itemIndex) in block.children" :key="itemIndex" 
                          class="feature-item-modal">
                        <div class="feature-icon-modal">
                          <i class="fas fa-check-circle"></i>
                        </div>
                        <span>{{ item.children && item.children.length > 0 ? item.children[0]?.text || '' : '' }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- Simple description fallback -->
                <div v-else>
                  <p class="text-lg text-gray-700 leading-relaxed mb-4">
                    {{ getServiceDescription(selectedService) }}
                  </p>
                  
                  <!-- Features from service -->
                  <div v-if="getFeatures(selectedService).length > 0" class="mt-6">
                    <h4 class="text-xl font-bold text-gray-800 mb-3">Características</h4>
                    <ul class="features-list-modal">
                      <li v-for="(feature, index) in getFeatures(selectedService)" :key="index" 
                          class="feature-item-modal">
                        <div class="feature-icon-modal">
                          <i class="fas fa-check-circle"></i>
                        </div>
                        <span>{{ feature }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Gallery Section (only in modal) -->
            <div class="service-gallery mt-8">
              <h3 class="text-2xl font-bold mb-4">Galería</h3>
              
              <div v-if="serviceGallery && serviceGallery.length > 0" class="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(image, index) in serviceGallery" :key="index" class="gallery-item">
                  <div class="gallery-image-container" @click="openLightbox(index)">
                    <img 
                      :src="getGalleryImageUrl(image)" 
                      :alt="image.attributes?.alternativeText || 'Imagen de galería'"
                      class="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      @error="handleImageError"
                    />
                    <div class="gallery-overlay">
                      <div class="gallery-zoom-icon">
                        <i class="fas fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-else class="text-center py-8 bg-gray-100 rounded-lg">
                <i class="fas fa-images text-4xl text-gray-400 mb-3"></i>
                <p class="text-lg font-medium">No hay imágenes disponibles en la galería.</p>
                <p class="text-sm text-gray-500 mt-2">ID del servicio: {{ selectedService?.id }}</p>
              </div>
            </div>
            
            <!-- New Lightbox Implementation -->
            <div v-if="lightboxActive" class="fixed inset-0 lightbox-bg flex items-center justify-center z-50" @click="closeLightbox">
              <div class="relative max-w-4xl mx-auto" @click.stop>
                <!-- Close button -->
                <button @click="closeLightbox" class="absolute top-4 right-4 gradient-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
                  <i class="fas fa-times"></i>
                </button>
                
                <!-- Image container -->
                <div class="p-4 bg-white rounded-lg shadow-xl">
                  <img 
                    v-if="currentLightboxImage" 
                    :src="getGalleryImageUrl(currentLightboxImage)" 
                    :alt="currentLightboxImage?.attributes?.alternativeText || 'Imagen de galería'"
                    class="max-h-[70vh] max-w-full object-contain"
                  />
                </div>
                
                <!-- Navigation buttons -->
                <button 
                  @click.stop="navigateLightbox('prev')" 
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center"
                  :disabled="currentLightboxIndex === 0"
                  :class="{'opacity-50 cursor-not-allowed': currentLightboxIndex === 0}"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                
                <button 
                  @click.stop="navigateLightbox('next')" 
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center"
                  :disabled="currentLightboxIndex >= serviceGallery.length - 1"
                  :class="{'opacity-50 cursor-not-allowed': currentLightboxIndex >= serviceGallery.length - 1}"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
                
                <!-- Counter -->
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full text-gray-800 font-medium shadow-md">
                  {{ currentLightboxIndex + 1 }} / {{ serviceGallery.length }}
                </div>
              </div>
            </div>
            
            <!-- Call to Action -->
            <div class="modal-cta">
              <NuxtLink to="/cotiza" class="cta-button">
                Solicitar Cotización
              </NuxtLink>
              <NuxtLink to="/contacto" class="cta-button-secondary">
                Contactar
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import axios from 'axios';

definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

// Strapi connection variables
const strapiUrl = ref(process.env.NUXT_PUBLIC_STRAPI_API_URL || 'https://strapi.fiesco.computoespacial.com/api');
const strapiBaseUrl = ref(process.env.NUXT_PUBLIC_STRAPI_URL || 'https://strapi.fiesco.computoespacial.com');
const strapiApiKey = ref(process.env.NUXT_PUBLIC_STRAPI_API_KEY || '1c74ca7b3d5fb29dd2a3c8b5a3e6c66020669ced5465517e9b6ac9ece4357ec33f2be5192306fe827d138bc3b3725f6da6304275be00aabe38d74b2919553f3c764c08903746459146cf005ebe3d248a39bd606ea84ae07acddb11b47ce1b0ceae39e4486fc3a12b6161e6f87c967faa103b0e2f9077f57d5ab25fd7d8e8d68d');

// Reactive state
const services = ref([]);
const loading = ref(false);
const error = ref(null);

// Modal state
const showModal = ref(false);
const selectedService = ref(null);
const serviceGallery = ref([]); // State variable for gallery data

// Lightbox state
const lightboxActive = ref(false);
const currentLightboxIndex = ref(0);
const currentLightboxImage = computed(() => {
  if (serviceGallery.value.length === 0 || currentLightboxIndex.value >= serviceGallery.value.length) {
    return null;
  }
  return serviceGallery.value[currentLightboxIndex.value];
});

// Features and testimonials (kept as static data for now)
const features = ref([
  {
    id: 1,
    title: 'Precisión Garantizada',
    description: 'Tolerancias exactas en cada pieza',
    icon: 'fa-bullseye'
  },
  {
    id: 2,
    title: 'Tecnología Avanzada',
    description: 'Equipos de última generación',
    icon: 'fa-microchip'
  },
  {
    id: 3,
    title: 'Experiencia Comprobada',
    description: '+10 años en la industria',
    icon: 'fa-certificate'
  },
  {
    id: 4,
    title: 'Soporte 24/7',
    description: 'Asistencia técnica continua',
    icon: 'fa-headset'
  }
]);

const testimonials = ref([
  {
    id: 1,
    content: 'La calidad y precisión de su trabajo es excepcional. Han sido un socio clave en nuestro proceso de manufactura.',
    name: 'Carlos Ramírez',
    company: 'Industrias Metalúrgicas'
  },
  {
    id: 2,
    content: 'Su equipo de diseño CAD/CAM nos ayudó a optimizar significativamente nuestros procesos de producción.',
    name: 'Ana Martínez',
    company: 'Tecnología Aeroespacial'
  },
  {
    id: 3,
    content: 'El servicio de prototipado rápido nos permitió validar nuestros diseños en tiempo récord.',
    name: 'Roberto Sánchez',
    company: 'Innovación Automotriz'
  }
]);

// Authentication headers
const getAuthHeaders = () => {
  return {
    'Authorization': `Bearer ${strapiApiKey.value}`
  };
};

// Fetch services from Strapi
const fetchServices = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    // Revert to the original endpoint that was working
    const response = await axios.get(`${strapiUrl.value}/services?populate=*`, {
      headers: getAuthHeaders()
    });
    
    console.log('Respuesta exitosa');
    
    // Debug the data structure
    if (response.data && response.data.data && response.data.data.length > 0) {
      console.log('Estructura del primer servicio:', JSON.stringify(response.data.data[0], null, 2));
    }
    
    // Process the data - Direct assignment like in nicki.vue
    if (response.data && response.data.data) {
      // Data comes directly, not inside attributes
      services.value = response.data.data;
      console.log(`Conexión exitosa. Se encontraron ${services.value.length} servicios.`);
    } else {
      services.value = [];
      console.log('Conexión exitosa, pero no se encontraron servicios en el formato esperado.');
    }
  } catch (err) {
    console.error('Error al obtener servicios:', err);
    error.value = `Error al cargar los servicios: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

// Modal functions
const openServiceDetail = (service) => {
  selectedService.value = service;
  console.log('Opening modal for service:', service.id, service.attributes?.titulo);
  
  // Debug the service object structure
  console.log('Complete service object:', service);
  
  showModal.value = true;
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
  
  // Set gallery data directly from the service object
  // Check for gallery in different possible locations based on Strapi structure
  if (service.attributes && service.attributes.gallery && service.attributes.gallery.data) {
    console.log('Gallery data found in service.attributes.gallery.data');
    serviceGallery.value = service.attributes.gallery.data;
  } else if (service.attributes && service.attributes.gallery) {
    console.log('Gallery data found in service.attributes.gallery');
    serviceGallery.value = Array.isArray(service.attributes.gallery) ? service.attributes.gallery : [service.attributes.gallery];
  } else if (service.gallery && service.gallery.data) {
    console.log('Gallery data found in service.gallery.data');
    serviceGallery.value = service.gallery.data;
  } else if (service.gallery) {
    console.log('Gallery data found in service.gallery');
    serviceGallery.value = Array.isArray(service.gallery) ? service.gallery : [service.gallery];
  } else {
    console.log('No gallery data found in service object');
    serviceGallery.value = [];
  }
  
  console.log('Gallery data set to:', serviceGallery.value);
};

const closeModal = () => {
  showModal.value = false;
  // Re-enable body scrolling
  document.body.style.overflow = 'auto';
  // Clear gallery data when modal closes
  serviceGallery.value = [];
  // Ensure lightbox is closed
  lightboxActive.value = false;
};

// Lightbox functions
const openLightbox = (index) => {
  console.log('Opening lightbox for image at index:', index);
  console.log('Gallery data:', serviceGallery.value);
  
  if (!serviceGallery.value || serviceGallery.value.length === 0) {
    console.error('No gallery images available');
    return;
  }
  
  // Set the current image index
  currentLightboxIndex.value = index;
  
  // Activate the lightbox immediately
  lightboxActive.value = true;
  console.log('Lightbox activated:', lightboxActive.value);
};

const closeLightbox = () => {
  console.log('Closing lightbox');
  lightboxActive.value = false;
};

const navigateLightbox = (direction) => {
  console.log('Navigating lightbox:', direction);
  if (direction === 'next' && currentLightboxIndex.value < serviceGallery.value.length - 1) {
    currentLightboxIndex.value++;
  } else if (direction === 'prev' && currentLightboxIndex.value > 0) {
    currentLightboxIndex.value--;
  }
};

// Handle keyboard navigation for lightbox
onMounted(() => {
  fetchServices();
  
  // Add keyboard event listener for lightbox navigation
  window.addEventListener('keydown', handleKeyDown);
});

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const handleKeyDown = (event) => {
  if (!lightboxActive.value) return;
  
  switch (event.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      navigateLightbox('prev');
      break;
    case 'ArrowRight':
      navigateLightbox('next');
      break;
  }
};

// Helper functions
const getImageUrl = (service) => {
  const defaultImage = '/img/services/default.jpg';
  
  // Handle the new data structure
  if (service.image) {
    // Direct image object from the new structure
    const imageUrl = service.image.url;
    return imageUrl.startsWith('http') 
      ? imageUrl 
      : `${strapiBaseUrl.value}${imageUrl}`;
  }
  
  // Handle the old data structure as fallback
  if (service.attributes && service.attributes.image && service.attributes.image.data) {
    const imageData = service.attributes.image.data;
    if (imageData.attributes && imageData.attributes.url) {
      const imageUrl = imageData.attributes.url;
      return imageUrl.startsWith('http') 
        ? imageUrl 
        : `${strapiBaseUrl.value}${imageUrl}`;
    }
  }
  
  return defaultImage;
};

const getServiceDescription = (service) => {
  // Handle the new data structure with rich text
  if (service.descripcion && Array.isArray(service.descripcion)) {
    // Get the first paragraph from the rich text
    const paragraph = service.descripcion.find(item => item.type === 'paragraph');
    if (paragraph && paragraph.children && paragraph.children.length > 0) {
      return paragraph.children[0]?.text || 'Sin descripción disponible';
    }
  }
  
  // Handle old data structure as fallback
  if (service.attributes?.descripcion) {
    return service.attributes.descripcion;
  }
  
  return 'Sin descripción disponible';
};

const getFeatures = (service) => {
  // Handle the new data structure with descripcion array
  if (service.descripcion && Array.isArray(service.descripcion)) {
    // Look for list items in the descripcion array
    const listItems = service.descripcion.find(item => item.type === 'list');
    if (listItems && listItems.children) {
      return listItems.children
        .filter(child => child.type === 'list-item')
        .map(item => item.children[0]?.text || '');
    }
  }
  
  // Handle old data structure as fallback
  if (service.attributes?.caracteristicas) {
    const caracteristicas = service.attributes.caracteristicas;
    
    if (typeof caracteristicas === 'string') {
      return caracteristicas.split(',').map(f => f.trim());
    } else if (Array.isArray(caracteristicas)) {
      return caracteristicas;
    }
  }
  
  return [];
};

const getGalleryImageUrl = (image) => {
  if (!image) return '';
  
  // Debug the image object
  console.log('Gallery image object:', image);
  
  // Try different possible structures
  if (image.attributes && image.attributes.url) {
    console.log('Using image.attributes.url:', image.attributes.url);
    return `${strapiBaseUrl.value}${image.attributes.url}`;
  } else if (image.url) {
    console.log('Using image.url:', image.url);
    return `${strapiBaseUrl.value}${image.url}`;
  } else if (image.formats && image.formats.medium) {
    console.log('Using image.formats.medium.url:', image.formats.medium.url);
    return `${strapiBaseUrl.value}${image.formats.medium.url}`;
  } else if (typeof image === 'string') {
    console.log('Using image as string:', image);
    if (image.startsWith('http')) {
      return image;
    } else {
      return `${strapiBaseUrl.value}${image}`;
    }
  }
  
  console.log('No valid URL found in image object');
  return '';
};

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src);
  // Optionally set a fallback image
  event.target.src = '/images/placeholder.jpg';
};
</script>

<script>
import BannerV2 from '../components/BannerV2.vue'
import FeaturesSection from '../components/services-components/FeaturesSection.vue'
import TestimonialsSection from '../components/services-components/TestimonialsSection.vue'
import CTASection from '~/components/common/CTASection.vue'

export default {
  name: 'ServiciosPage',
  components: {
    BannerV2,
    FeaturesSection,
    TestimonialsSection,
    CTASection
  },
  head() {
    return {
      title: 'Servicios | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones integrales de manufactura CNC y servicios industriales de alta precisión.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

/* We've moved the padding to the BannerV2 component itself */
:deep(.hero-section) {
  margin-top: 0;
}

/* Service Card Styles */
.service-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card-image {
  height: 240px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
  transition: all 0.3s ease;
}

.service-card:hover .image-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
  );
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 4px solid rgba(255, 255, 255, 0.1);
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: var(--content-secondary);
  border-color: rgba(255, 255, 255, 0.2);
}

.icon-wrapper i {
  color: white;
  font-size: 2rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .icon-wrapper i {
  transform: rotate(-5deg);
}

.card-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--content-dark);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--content-primary);
  transition: width 0.3s ease;
}

.service-card:hover .title::after {
  width: 80px;
}

.description {
  color: var(--content-gray);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--content-dark);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.feature-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--content-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon i {
  color: var(--content-primary);
  font-size: 0.75rem;
}

.learn-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--content-primary);
  font-weight: 600;
  margin-top: auto;
  transition: all 0.3s ease;
  text-decoration: none;
}

.learn-more:hover {
  color: var(--content-secondary);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.learn-more:hover .btn-icon {
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .card-image {
    height: 200px;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
  }
  
  .icon-wrapper i {
    font-size: 1.5rem;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 1.25rem;
  }
}

/* Service Detail Modal */
.service-detail-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 0.3s ease;
}

.modal-container {
  position: relative;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.3s ease;
  display: flex;
  flex-direction: column;
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-close-btn:hover {
  background-color: var(--content-secondary);
  transform: scale(1.1);
}

.modal-content {
  display: flex;
  flex-direction: column;
  max-height: 90vh;
}

.modal-hero {
  position: relative;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7)
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
}

.service-icon {
  width: 80px;
  height: 80px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  border: 4px solid rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
}

.service-description {
  margin-bottom: 2rem;
}

.rich-text-content {
  color: var(--content-gray);
  line-height: 1.7;
}

.features-list-modal {
  margin: 1rem 0;
}

.feature-item-modal {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.feature-item-modal:hover {
  background-color: #f1f3f5;
  transform: translateX(5px);
}

.feature-icon-modal {
  margin-right: 0.75rem;
  color: var(--content-primary);
}

.modal-cta {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--content-primary);
  color: white;
  border-radius: 0.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: var(--content-secondary);
  transform: translateY(-3px);
}

.cta-button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--content-primary);
  border: 2px solid var(--content-primary);
  border-radius: 0.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button-secondary:hover {
  background-color: rgba(var(--content-primary-rgb), 0.1);
  transform: translateY(-3px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

/* Lightbox Gallery */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000; /* Ensure it's above everything else */
}

.lightbox-container {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.lightbox-close:hover {
  background-color: var(--content-secondary);
  transform: scale(1.1);
}

.lightbox-content {
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  background-color: #f8f8f8;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.lightbox-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.lightbox-nav-btn.prev {
  left: 20px;
}

.lightbox-nav-btn.next {
  right: 20px;
}

.lightbox-nav-btn:hover:not(:disabled) {
  background-color: var(--content-secondary);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.lightbox-counter {
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

/* Gallery Styles */
.service-gallery {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.gallery-item {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-zoom-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-zoom-icon {
  transform: scale(1);
}

/* Lightbox gradients */
.lightbox-bg {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%);
}

.gradient-primary {
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, var(--content-secondary) 0%, var(--content-primary) 100%);
}
</style>
