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
      <div id="servicios" class="services-content py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard v-for="service in services" :key="service.id" :service="service" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import ServiceCard from '../components/services-components/ServiceCard.vue'
import BannerV1 from '../components/BannerV1.vue'

export default {
  name: 'ServiciosPage',
  components: {
    NavBar,
    Footer,
    ServiceCard,
    BannerV1
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Mecanizado CNC',
          description: 'Servicio de mecanizado de precisión con máquinas CNC para piezas complejas.',
          icon: 'fa-cog'
        },
        {
          id: 2,
          title: 'Diseño CAD/CAM',
          description: 'Diseño y programación CAD/CAM para optimizar la producción.',
          icon: 'fa-drafting-compass'
        },
        {
          id: 3,
          title: 'Prototipado Rápido',
          description: 'Desarrollo rápido de prototipos para validación de diseños.',
          icon: 'fa-cube'
        },
        {
          id: 4,
          title: 'Control de Calidad',
          description: 'Inspección y verificación dimensional de piezas mecanizadas.',
          icon: 'fa-check-square'
        },
        {
          id: 5,
          title: 'Consultoría CNC',
          description: 'Asesoría especializada en procesos de manufactura CNC.',
          icon: 'fa-comments'
        },
        {
          id: 6,
          title: 'Mantenimiento',
          description: 'Servicio de mantenimiento preventivo y correctivo de máquinas CNC.',
          icon: 'fa-tools'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.services-content {
  position: relative;
  z-index: 1;
}
</style>
