<template>
  <div>
    <NavBar />
    <main class="produccion-page">
      <BannerV1 
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
    <Footer />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
import BannerV1 from '../../components/BannerV1.vue'
import DetallesMaquinadoCNC from '../../components/services-components/DetallesMaquinadoCNC.vue'
import CapacidadesCNC from '../../components/services-components/CapacidadesCNC.vue'
import ProcesosCNC from '../../components/services-components/ProcesosCNC.vue'
import GaleriaCNC from '../../components/services-components/GaleriaCNC.vue'
import CTASection from '../../components/common/CTASection.vue'

export default {
  name: 'ProduccionPage',
  components: {
    NavBar,
    Footer,
    BannerV1,
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
