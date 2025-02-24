<template>
  <div>
    <NavBar />
    <main class="services-page">
      <BannerV1 
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
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Servicios Especializados</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios de manufactura CNC y diseño, respaldados por años de experiencia y tecnología de punta.
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
import BannerV1 from '../components/BannerV1.vue'
import FeaturesSection from '../components/services-components/FeaturesSection.vue'
import TestimonialsSection from '../components/services-components/TestimonialsSection.vue'
import CTASection from '~/components/common/CTASection.vue'

export default {
  name: 'ServiciosPage',
  components: {
    NavBar,
    Footer,
    ServiceCard,
    BannerV1,
    FeaturesSection,
    TestimonialsSection,
    CTASection
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Mecanizado CNC',
          description: 'Servicio de mecanizado de precisión con máquinas CNC de última generación para piezas complejas. Especialistas en materiales como aluminio, acero, titanio y más.',
          icon: 'fa-cog',
          image: '/images/services/cnc-machining.jpg',
          features: ['Tolerancias precisas', 'Acabados superiores', 'Alta productividad']
        },
        {
          id: 2,
          title: 'Diseño CAD/CAM',
          description: 'Diseño y programación CAD/CAM avanzada para optimizar la producción. Utilizamos software de última generación para garantizar la máxima eficiencia.',
          icon: 'fa-drafting-compass',
          image: '/images/services/cad-cam.jpg',
          features: ['Modelado 3D', 'Simulación', 'Optimización']
        },
        {
          id: 3,
          title: 'Prototipado Rápido',
          description: 'Desarrollo ágil de prototipos para validación de diseños. Reducimos el tiempo de llegada al mercado con prototipos funcionales de alta calidad.',
          icon: 'fa-cube',
          image: '/images/services/prototyping.jpg',
          features: ['Iteración rápida', 'Validación', 'Personalización']
        },
        {
          id: 4,
          title: 'Control de Calidad',
          description: 'Inspección y verificación dimensional de piezas mecanizadas con equipos de medición de última generación. Garantizamos la calidad de cada pieza.',
          icon: 'fa-check-square',
          image: '/images/services/quality-control.jpg',
          features: ['Medición precisa', 'Reportes detallados', 'Certificación']
        },
        {
          id: 5,
          title: 'Consultoría CNC',
          description: 'Asesoría especializada en procesos de manufactura CNC. Optimizamos sus procesos y mejoramos la eficiencia de producción.',
          icon: 'fa-comments',
          image: '/images/services/consulting.jpg',
          features: ['Optimización', 'Capacitación', 'Mejora continua']
        },
        {
          id: 6,
          title: 'Mantenimiento',
          description: 'Servicio integral de mantenimiento preventivo y correctivo de máquinas CNC. Maximizamos el tiempo de actividad de su equipo.',
          icon: 'fa-tools',
          image: '/images/services/maintenance.jpg',
          features: ['Preventivo', 'Correctivo', 'Diagnóstico']
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
