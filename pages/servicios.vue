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
              <h3 class="title">{{ service.attributes?.titulo || 'Servicio' }}</h3>
              <p class="description">{{ service.attributes?.descripcion || 'Sin descripción disponible' }}</p>
              
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

              <!-- Link to service detail page -->
              <nuxt-link :to="`/servicios/${service.attributes?.ruta || service.id}`" class="learn-more group">
                <span class="btn-text">Más Información</span>
                <span class="btn-icon">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </nuxt-link>
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
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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

// Fetch services on component mount
onMounted(() => {
  fetchServices();
});

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
  background: var(--content-primary);
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
</style>
