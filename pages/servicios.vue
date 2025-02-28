<template>
  <div>
    <NavBar />
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
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard v-for="service in services" :key="service.id" :service="service" />
          </div>
        </div>
      </section>

      <FeaturesSection :features="features" />
      <TestimonialsSection :testimonials="testimonials" />
      <CTASection />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import ServiceCard from '../components/services-components/ServiceCard.vue'
import BannerV2 from '../components/BannerV2.vue'
import FeaturesSection from '../components/services-components/FeaturesSection.vue'
import TestimonialsSection from '../components/services-components/TestimonialsSection.vue'
import CTASection from '~/components/common/CTASection.vue'

export default {
  name: 'ServiciosPage',
  components: {
    NavBar,
    Footer,
    ServiceCard,
    BannerV2,
    FeaturesSection,
    TestimonialsSection,
    CTASection
  },
  data() {
    return {
      services: [
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
          description: 'Fabricación de piezas de precisión como cilindros, pistones, poleas, chumaceras, sprockets, bujes, punzones y matrices, trabajando con diversos aceros de grado herramienta y maquinaria.',
          icon: 'fa-tools',
          image: '/images/services/cnc-machining.jpg',
          features: ['Piezas de precisión', 'Aceros especializados', 'Alta calidad'],
          link: '/servicios-design/maquinado-cnc'
        },
        {
          id: 4,
          title: 'Corte Láser',
          description: 'Corte preciso en materiales como acero A-36, A-572, acero inoxidable, acero 1018/1026 y aluminio, con capacidades desde calibre 18 hasta 3/4 de pulgada.',
          icon: 'fa-laser',
          image: '/images/services/laser-cutting.jpg',
          features: ['Diversos materiales', 'Corte preciso', 'Calibre 18 hasta 3/4"'],
          link: '/servicios-design/corte-laser'
        },
        {
          id: 5,
          title: 'Acabados',
          description: 'Ofrecemos tratamientos térmicos certificados para aceros herramienta, maquinaria e inoxidables, así como diversos acabados como anodizado, niquelado, powder coat, black oxide y fosfato.',
          icon: 'fa-spray-can',
          image: '/images/services/finishing.jpg',
          features: ['Tratamientos térmicos', 'Recubrimientos', 'Acabados especiales'],
          link: '/servicios-design/acabados'
        },
        {
          id: 6,
          title: 'Recubrimientos',
          description: 'Aplicamos diversos recubrimientos especializados como vulcanizado, neopreno, poliuretano, nitrilo y viton según las necesidades específicas de cada proyecto.',
          icon: 'fa-fill-drip',
          image: '/images/services/coatings.jpg',
          features: ['Vulcanizado', 'Elastómeros', 'Materiales especiales'],
          link: '/servicios-design/recubrimientos'
        }
      ],
      features: [
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
      ],
      testimonials: [
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
</style>
