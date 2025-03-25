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
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
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
const strapiApiKey = ref(process.env.NUXT_PUBLIC_STRAPI_API_KEY || '5a7f68926c6783e660757108c7bdda3d58985781c563fcaa684b67367c189a784f056714ae937c7b650a176f7d36e9f79e6097bc0007573ced0c6c7b941351958615781fbdb219f72bf266a6af788f556bb2405c1755a64bbf27d5d62914b5b6be4628a47af70336c73c02885c4115f667a31ab77e296340c2c38d20e06c3468');

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
    // Fetch services with populated images
    const url = `${strapiUrl.value}/services?populate=*`;
    console.log('Fetching services from:', url);
    
    const response = await axios.get(url, {
      headers: getAuthHeaders()
    });
    
    // Log the entire response to see its structure
    console.log('API Response:', response.data);
    
    // Create a fallback array of services if API doesn't return expected data
    // This ensures the page still works even if the API fails
    const fallbackServices = [
      {
        id: 1,
        title: 'Maquinado Convencional',
        description: 'Flechas de hasta 10 pulgadas de diámetro, sistemas de transmisión motriz, platos, sprockets, rodillos y rectificado utilizando tornos convencionales, fresadoras y rectificadoras.',
        icon: 'fa-cog',
        image: '/images/services/cnc-machining.jpg',
        features: ['Flechas hasta 10" de diámetro', 'Sistemas de transmisión', 'Rectificado cilíndrico y plano'],
        link: '/servicios-design/maquinado-convencional'
      },
      {
        id: 2,
        title: 'Producción',
        description: 'Trabajamos con diversos materiales como bronce, aluminio, acero y plásticos de ingeniería. Ofrecemos servicios de submaquila para procesos después de fundición e inyección.',
        icon: 'fa-industry',
        image: '/images/services/production.jpg',
        features: ['Materiales diversos', 'Submaquila', 'Ingeniería de plásticos'],
        link: '/servicios-design/produccion'
      },
      {
        id: 3,
        title: 'Maquinado CNC',
        description: 'Fabricación de piezas de precisión como cilindros, pistones, poleas, chumaceras, sprockets, bujes y matrices, trabajando con diversos aceros de grado herramienta y maquinaria.',
        icon: 'fa-tools',
        image: '/images/services/cnc-machining.jpg',
        features: ['Piezas de precisión', 'Aceros especializados', 'Alta calidad'],
        link: '/servicios-design/maquinado-cnc'
      }
    ];
    
    // Process the data with careful error handling
    if (response.data && response.data.data && Array.isArray(response.data.data)) {
      try {
        // Try to process the API data
        services.value = response.data.data.map(item => {
          // Create a base service object with fallbacks for all properties
          const service = {
            id: item.id || Math.random().toString(36).substring(2, 9),
            title: 'Servicio',
            description: 'Sin descripción disponible',
            icon: 'fa-wrench',
            image: '/images/services/default.jpg',
            features: [],
            link: `/servicios/${item.id || 'default'}`
          };
          
          // Only try to access attributes if they exist
          const attrs = item.attributes || {};
          
          // Safely assign properties
          if (attrs.title) service.title = attrs.title;
          if (attrs.description) service.description = attrs.description;
          if (attrs.icon) service.icon = attrs.icon;
          if (attrs.link) service.link = attrs.link;
          if (attrs.features) service.features = attrs.features;
          
          // Handle image with extra care
          if (attrs.image && attrs.image.data) {
            const imageData = attrs.image.data;
            if (imageData.attributes && imageData.attributes.url) {
              const imageUrl = imageData.attributes.url;
              service.image = imageUrl.startsWith('http') 
                ? imageUrl 
                : `${strapiBaseUrl.value}${imageUrl}`;
            }
          }
          
          return service;
        });
        
        console.log('Processed services:', services.value);
      } catch (processingError) {
        // If processing fails, use fallback data
        console.error('Error processing API data:', processingError);
        services.value = fallbackServices;
        error.value = `Error al procesar los datos: ${processingError.message}`;
      }
    } else {
      // If API doesn't return expected structure, use fallback data
      console.warn('API did not return expected data structure, using fallbacks');
      services.value = fallbackServices;
    }
  } catch (err) {
    // If API request fails entirely, use fallback data
    console.error('Error fetching services:', err);
    services.value = fallbackServices;
    error.value = `Error al cargar los servicios: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

// Helper to get the full image URL
const getImageUrl = (imageData) => {
  if (!imageData || !imageData.attributes || !imageData.attributes.url) {
    console.log('Invalid image data structure');
    return '/images/services/default.jpg';
  }
  
  const imageUrl = imageData.attributes.url;
  
  // Construct the full URL
  const baseUrl = strapiBaseUrl.value.endsWith('/') 
    ? strapiBaseUrl.value.slice(0, -1) 
    : strapiBaseUrl.value;
  
  const fullUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `${baseUrl}${imageUrl}`;
    
  console.log('Full image URL:', fullUrl);
  return fullUrl;
};

// Fetch services on component mount
onMounted(() => {
  fetchServices();
});
</script>

<script>
import ServiceCard from '../components/services-components/ServiceCard.vue'
import BannerV2 from '../components/BannerV2.vue'
import FeaturesSection from '../components/services-components/FeaturesSection.vue'
import TestimonialsSection from '../components/services-components/TestimonialsSection.vue'
import CTASection from '~/components/common/CTASection.vue'

export default {
  name: 'ServiciosPage',
  components: {
    ServiceCard,
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
</style>
