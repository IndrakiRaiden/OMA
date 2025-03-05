<template>
  <div>
    <main v-if="service" class="produccion-page">
      <BannerV2 
        title="Servicios de Producción" 
        subtitle="Fabricación industrial de componentes y sistemas con diversos materiales y procesos"
        :buttons="[
          { text: 'Ver Detalles', href: '#detalles', class: 'primary-btn' },
          { text: 'Cotizar', href: '/cotiza', class: 'secondary-btn' }
        ]"
      />
      
      <DetallesMaquinadoCNC />
      <CapacidadesCNC />
      <ProcesosCNC />
      <GaleriaCNC />
      <CTASection 
        title="¿Necesita servicios de producción industrial de alta calidad?"
        subtitle="Contáctenos hoy mismo para discutir su proyecto y obtener una cotización personalizada."
        buttonText="Solicitar cotización"
        buttonLink="/cotiza"
      />
    </main>
    <div v-else class="loading-container">
      <p>Cargando información del servicio...</p>
    </div>
  </div>
</template>

<script>
import BannerV2 from '../../components/BannerV2.vue'
import DetallesMaquinadoCNC from '../../components/services-components/DetallesMaquinadoCNC.vue'
import CapacidadesCNC from '../../components/services-components/CapacidadesCNC.vue'
import ProcesosCNC from '../../components/services-components/ProcesosCNC.vue'
import GaleriaCNC from '../../components/services-components/GaleriaCNC.vue'
import CTASection from '../../components/common/CTASection.vue'
import { getServiceModel } from '../../services/api'
import ServiceModel from '../../models/ServiceModel'

export default {
  name: 'ProduccionPage',
  components: {
    BannerV2,
    DetallesMaquinadoCNC,
    CapacidadesCNC,
    ProcesosCNC,
    GaleriaCNC,
    CTASection
  },
  head() {
    return {
      title: 'Producción | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Servicios de producción en serie para la industria. Fabricación de piezas y componentes con precisión y calidad garantizada. Producción a escala con tecnología avanzada.' }
      ]
    }
  }
}
</script>

<style scoped>
.produccion-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}
</style>
