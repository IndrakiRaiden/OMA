<template>
  <div>
    <NavBar />
    <main class="servicios-page">
      <ServiciosHero />
      <ServiciosGrid />
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ServiciosHero from '../components/servicios-components/ServiciosHero.vue'
import ServiciosGrid from '../components/servicios-components/ServiciosGrid.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'ServiciosPage',
  components: {
    ServiciosHero,
    ServiciosGrid,
    NavBar,
    Footer
  }
})
</script>

<style scoped>
.servicios-page {
  background-color: #f8fafc;
  overflow: hidden;
  position: relative;
}
</style>
