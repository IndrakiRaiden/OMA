<template>
  <main class="service-detail-page">
    <BannerV2 
      :title="service?.titulo || 'Servicio'" 
      subtitle="Soluciones integrales de manufactura CNC"
      :buttons="[
        { text: 'Todos los Servicios', href: '/servicios', class: 'secondary-btn' },
        { text: 'Cotizar', href: '/cotiza', class: 'primary-btn' }
      ]"
    />
    
    <section class="service-content py-16">
      <div class="container mx-auto px-4">
        <!-- Loading and error states -->
        <div v-if="loading" class="mb-8 p-4 bg-blue-100 rounded text-center">
          <p>Cargando información del servicio...</p>
        </div>
        
        <div v-if="error" class="mb-8 p-4 bg-red-100 rounded text-center">
          <p class="text-red-700">{{ error }}</p>
        </div>
        
        <!-- Service content -->
        <div v-if="service" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Service image -->
          <div class="lg:col-span-1">
            <div class="service-image rounded-lg overflow-hidden shadow-lg">
              <img 
                :src="getImageUrl(service)" 
                :alt="service.titulo" 
                class="w-full h-auto object-cover"
              >
            </div>
            
            <!-- Features list -->
            <div v-if="features.length > 0" class="features-list mt-8 bg-white p-6 rounded-lg shadow">
              <h3 class="text-xl font-bold mb-4 text-gray-800">Características</h3>
              <ul class="space-y-3">
                <li v-for="(feature, index) in features" :key="index" class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <i class="fas fa-check text-white text-xs"></i>
                  </span>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Service description -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">{{ service.titulo }}</h2>
            
            <div v-if="service.descripcion" class="prose prose-lg max-w-none">
              <!-- Render rich text content -->
              <div v-for="(block, index) in service.descripcion" :key="index">
                <!-- Paragraph -->
                <p v-if="block.type === 'paragraph'" class="mb-4 text-gray-700 leading-relaxed">
                  {{ block.children[0]?.text || '' }}
                </p>
                
                <!-- List -->
                <ul v-else-if="block.type === 'list' && block.format === 'unordered'" class="list-disc pl-5 mb-6 space-y-2">
                  <li v-for="(item, itemIndex) in block.children" :key="itemIndex" class="text-gray-700">
                    {{ item.children[0]?.text || '' }}
                  </li>
                </ul>
                
                <!-- Ordered List -->
                <ol v-else-if="block.type === 'list' && block.format === 'ordered'" class="list-decimal pl-5 mb-6 space-y-2">
                  <li v-for="(item, itemIndex) in block.children" :key="itemIndex" class="text-gray-700">
                    {{ item.children[0]?.text || '' }}
                  </li>
                </ol>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-200">
              <h3 class="text-xl font-bold mb-2">¿Interesado en este servicio?</h3>
              <p class="text-gray-700 mb-4">Contáctanos para obtener más información o solicitar una cotización personalizada.</p>
              <div class="flex flex-wrap gap-4">
                <NuxtLink to="/contacto" class="btn-primary">
                  <i class="fas fa-envelope mr-2"></i> Contactar
                </NuxtLink>
                <NuxtLink to="/cotiza" class="btn-secondary">
                  <i class="fas fa-calculator mr-2"></i> Solicitar Cotización
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Fallback if no service found -->
        <div v-else-if="!loading && !error" class="text-center p-8 bg-gray-100 rounded">
          <p>No se encontró el servicio solicitado.</p>
          <NuxtLink to="/servicios" class="btn-primary mt-4">
            Ver todos los servicios
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <RelatedServices :currentServiceId="serviceId" />
    <CTASection />
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

const route = useRoute();
const serviceId = computed(() => route.params.id);

// Strapi connection variables
const strapiUrl = ref(process.env.NUXT_PUBLIC_STRAPI_API_URL || 'https://strapi.fiesco.computoespacial.com/api');
const strapiBaseUrl = ref(process.env.NUXT_PUBLIC_STRAPI_URL || 'https://strapi.fiesco.computoespacial.com');
const strapiApiKey = ref(process.env.NUXT_PUBLIC_STRAPI_API_KEY || '1c74ca7b3d5fb29dd2a3c8b5a3e6c66020669ced5465517e9b6ac9ece4357ec33f2be5192306fe827d138bc3b3725f6da6304275be00aabe38d74b2919553f3c764c08903746459146cf005ebe3d248a39bd606ea84ae07acddb11b47ce1b0ceae39e4486fc3a12b6161e6f87c967faa103b0e2f9077f57d5ab25fd7d8e8d68d');

// Reactive state
const service = ref(null);
const loading = ref(false);
const error = ref(null);
const features = computed(() => getFeatures(service.value || {}));

// Authentication headers
const getAuthHeaders = () => {
  return {
    'Authorization': `Bearer ${strapiApiKey.value}`
  };
};

// Fetch service details from Strapi
const fetchServiceDetails = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    // First try to find by route name (slug)
    let response = await axios.get(`${strapiUrl.value}/services?filters[ruta]=${serviceId.value}&populate=*`, {
      headers: getAuthHeaders()
    });
    
    // If not found by route name, try by ID
    if (!response.data?.data?.length) {
      response = await axios.get(`${strapiUrl.value}/services/${serviceId.value}?populate=*`, {
        headers: getAuthHeaders()
      });
      
      if (response.data?.data) {
        service.value = response.data.data;
      }
    } else {
      // Use the first result if found by route name
      service.value = response.data.data[0];
    }
    
    // If still not found, check if we have a static service page
    if (!service.value) {
      // This is a fallback for static service pages
      console.log('No se encontró el servicio en Strapi, verificando páginas estáticas.');
    }
  } catch (err) {
    console.error('Error al obtener detalles del servicio:', err);
    error.value = `Error al cargar la información del servicio: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

// Helper functions
const getImageUrl = (service) => {
  const defaultImage = '/img/services/default.jpg';
  
  if (service.image) {
    const imageUrl = service.image.url;
    return imageUrl.startsWith('http') 
      ? imageUrl 
      : `${strapiBaseUrl.value}${imageUrl}`;
  }
  
  if (service.attributes?.image?.data) {
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

// Fetch service on component mount
onMounted(() => {
  fetchServiceDetails();
});
</script>

<script>
import BannerV2 from '../../components/BannerV2.vue'
import RelatedServices from '../../components/services-components/RelatedServices.vue'
import CTASection from '~/components/common/CTASection.vue'

export default {
  name: 'ServiceDetailPage',
  components: {
    BannerV2,
    RelatedServices,
    CTASection
  },
  head() {
    return {
      title: this.service ? `${this.service.titulo} | OMA - Servicios de Manufactura` : 'Servicio | OMA',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: this.service ? `${this.service.titulo} - Servicios de manufactura y producción industrial de alta precisión.` : 'Servicios de manufactura y producción industrial de alta precisión.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-detail-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

.service-image {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-image:hover img {
  transform: scale(1.05);
}

/* Button styles */
.btn-primary {
  display: inline-flex;
  align-items: center;
  background-color: #3182ce;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition-duration: 300ms;
}

.btn-primary:hover {
  background-color: #2c5282;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background-color: #edf2f7;
  color: #1a202c;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition-duration: 300ms;
}

.btn-secondary:hover {
  background-color: #e2e8f0;
}

/* Rich text content styles */
:deep(.prose) {
  max-width: none;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

:deep(.prose ul) {
  margin-bottom: 1.5rem;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}
</style>
