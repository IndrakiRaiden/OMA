<template>
  <div>
    <main v-if="service" class="recubrimientos-page">
      <BannerV1 
        title="Recubrimientos" 
        subtitle="Aplicación de recubrimientos especializados como vulcanizado, neopreno, poliuretano y más"
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
        title="¿Necesita servicios de recubrimientos especializados?"
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
import BannerV1 from '../../components/BannerV1.vue'
import DetallesMaquinadoCNC from '../../components/services-components/DetallesMaquinadoCNC.vue'
import CapacidadesCNC from '../../components/services-components/CapacidadesCNC.vue'
import ProcesosCNC from '../../components/services-components/ProcesosCNC.vue'
import GaleriaCNC from '../../components/services-components/GaleriaCNC.vue'
import CTASection from '../../components/common/CTASection.vue'
import { getServiceModel } from '../../services/api'
import ServiceModel from '../../models/ServiceModel'

export default {
  name: 'RecubrimientosPage',
  components: {
    BannerV1,
    DetallesMaquinadoCNC,
    CapacidadesCNC,
    ProcesosCNC,
    GaleriaCNC,
    CTASection
  },
  head() {
    return {
      title: 'Recubrimientos | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Servicios especializados de recubrimientos industriales como vulcanizado, neopreno, poliuretano, nitrilo y viton para diversas aplicaciones y necesidades.' }
      ]
    }
  }
}
</script>

<style scoped>
.recubrimientos-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}
</style>
