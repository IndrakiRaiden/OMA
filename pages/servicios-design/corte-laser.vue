<template>
  <div>
    <NavBar />
    <main class="corte-laser-page">
      <BannerV1 
        title="Corte Láser" 
        subtitle="Corte preciso en diversos materiales con tecnología láser de última generación"
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
        title="¿Necesita servicios de corte láser de alta precisión?"
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
  name: 'CorteLaserPage',
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
      title: 'Corte Láser | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Servicios de corte láser de alta precisión para acero, acero inoxidable y aluminio. Capacidad desde calibre 18 hasta 3/4 de pulgada con acabados de alta calidad.' }
      ]
    }
  }
}
</script>

<style scoped>
.corte-laser-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}
</style>
