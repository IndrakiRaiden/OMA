<template>
  <section class="related-services py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Servicios Relacionados</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Descubre otros servicios de manufactura y producción que podrían interesarte.
        </p>
      </div>
      
      <!-- Loading state -->
      <div v-if="loading" class="mb-8 p-4 bg-blue-100 rounded text-center">
        <p>Cargando servicios relacionados...</p>
      </div>
      
      <!-- Services grid -->
      <div v-if="relatedServices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in relatedServices" :key="service.id" class="service-card group">
          <!-- Service image -->
          <div class="card-image" :style="{ backgroundImage: `url(${getImageUrl(service)})` }">
            <div class="image-overlay"></div>
            <div class="icon-wrapper">
              <i :class="['fas', service.attributes?.icon || 'fa-wrench']"></i>
            </div>
          </div>
          
          <!-- Service content -->
          <div class="card-content">
            <h3 class="title">{{ service.attributes?.titulo || service.titulo || 'Servicio' }}</h3>
            <p class="description">
              {{ getShortDescription(service) }}
            </p>
            
            <!-- Link to service detail page -->
            <nuxt-link :to="`/servicios/${service.attributes?.ruta || service.ruta || service.id}`" class="learn-more group">
              <span class="btn-text">Más Información</span>
              <span class="btn-icon">
                <i class="fas fa-arrow-right"></i>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      
      <!-- Fallback if no related services found -->
      <div v-else-if="!loading" class="text-center p-8">
        <p>No se encontraron servicios relacionados.</p>
        <nuxt-link to="/servicios" class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Ver todos los servicios
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const props = defineProps({
  currentServiceId: {
    type: [String, Number],
    required: true
  },
  limit: {
    type: Number,
    default: 3
  }
});

// Strapi connection variables
const strapiUrl = ref(process.env.NUXT_PUBLIC_STRAPI_API_URL || 'https://strapi.fiesco.computoespacial.com/api');
const strapiBaseUrl = ref(process.env.NUXT_PUBLIC_STRAPI_URL || 'https://strapi.fiesco.computoespacial.com');
const strapiApiKey = ref(process.env.NUXT_PUBLIC_STRAPI_API_KEY || '1c74ca7b3d5fb29dd2a3c8b5a3e6c66020669ced5465517e9b6ac9ece4357ec33f2be5192306fe827d138bc3b3725f6da6304275be00aabe38d74b2919553f3c764c08903746459146cf005ebe3d248a39bd606ea84ae07acddb11b47ce1b0ceae39e4486fc3a12b6161e6f87c967faa103b0e2f9077f57d5ab25fd7d8e8d68d');

// Reactive state
const relatedServices = ref([]);
const loading = ref(false);

// Authentication headers
const getAuthHeaders = () => {
  return {
    'Authorization': `Bearer ${strapiApiKey.value}`
  };
};

// Fetch related services from Strapi
const fetchRelatedServices = async () => {
  loading.value = true;
  
  try {
    // Get all services except the current one
    const response = await axios.get(
      `${strapiUrl.value}/services?populate=*&filters[id][$ne]=${props.currentServiceId}`, 
      { headers: getAuthHeaders() }
    );
    
    if (response.data && response.data.data) {
      // Shuffle and limit the results
      const shuffled = response.data.data.sort(() => 0.5 - Math.random());
      relatedServices.value = shuffled.slice(0, props.limit);
    }
  } catch (err) {
    console.error('Error al obtener servicios relacionados:', err);
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

const getShortDescription = (service) => {
  // Handle the new data structure
  if (service.descripcion && Array.isArray(service.descripcion)) {
    const paragraph = service.descripcion.find(item => item.type === 'paragraph');
    if (paragraph && paragraph.children && paragraph.children.length > 0) {
      const text = paragraph.children[0]?.text || '';
      return text.length > 100 ? text.substring(0, 100) + '...' : text;
    }
  }
  
  // Handle old data structure
  if (service.attributes?.descripcion) {
    const text = service.attributes.descripcion;
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  }
  
  return 'Sin descripción disponible';
};

// Fetch related services on component mount and when currentServiceId changes
onMounted(fetchRelatedServices);
watch(() => props.currentServiceId, fetchRelatedServices);
</script>

<style scoped>
/* Service Card Styles */
.service-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: var(--content-primary, #3182ce);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1);
}

.icon-wrapper i {
  color: white;
  font-size: 1.5rem;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--content-primary, #3182ce);
}

.description {
  color: var(--content-gray, #4a5568);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.learn-more {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--content-primary, #3182ce);
  transition: all 0.3s ease;
  margin-top: auto;
}

.btn-text {
  margin-right: 0.5rem;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.learn-more:hover .btn-icon {
  transform: translateX(5px);
}
</style>
