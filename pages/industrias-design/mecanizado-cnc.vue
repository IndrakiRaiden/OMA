<template>
  <div>
    <NavBar />
    <main class="mecanizado-page">
      <BannerV2 
        title="Mecanizado CNC" 
        subtitle="Precisión y calidad en cada pieza manufacturada con tecnología de control numérico"
        :buttons="[
          { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
          { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
        ]"
      />
      
      <ServiciosMecanizado />
      <CapacidadesMecanizado />
      <WhyChooseUs />
      <GaleriaMecanizado />
      <CTASection />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
import BannerV2 from '../../components/BannerV2.vue'
import CTASection from '../../components/common/CTASection.vue'
import ServiciosMecanizado from '../../components/industrias-components/ServiciosMecanizado.vue'
import CapacidadesMecanizado from '../../components/industrias-components/CapacidadesMecanizado.vue'
import WhyChooseUs from '../../components/industrias-components/WhyChooseUs.vue'
import GaleriaMecanizado from '../../components/industrias-components/GaleriaMecanizado.vue'

export default {
  name: 'MecanizadoCNCPage',
  components: {
    NavBar,
    Footer,
    BannerV2,
    CTASection,
    ServiciosMecanizado,
    CapacidadesMecanizado,
    WhyChooseUs,
    GaleriaMecanizado
  }
}
</script>

<style scoped>
.mecanizado-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}
</style>