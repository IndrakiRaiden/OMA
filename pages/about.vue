<template>
  <div>
    <NavBar />
    <div class="about-page">
      <AboutHero />
      <MissionVision />
      <OurValues />
      <OurAttributes />
      <NameOrigin />
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AboutHero from '../components/about-components/AboutHero.vue'
import MissionVision from '../components/about-components/MissionVision.vue'
import OurValues from '../components/about-components/OurValues.vue'
import OurAttributes from '../components/about-components/OurAttributes.vue'
import NameOrigin from '../components/about-components/NameOrigin.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    AboutHero,
    MissionVision,
    OurValues,
    OurAttributes,
    NameOrigin,
    NavBar,
    Footer
  }
})
</script>

<style scoped>
.about-page {
  background-color: #F5F5F5;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

/* Formas geométricas animadas */
.about-page::before,
.about-page::after {
  content: '';
  position: fixed;
  background: #4B6E8C;
  opacity: 0.03;
}

.about-page::before {
  width: 50vh;
  height: 50vh;
  top: 20%;
  left: -10%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: floatShape1 15s infinite linear;
}

.about-page::after {
  width: 40vh;
  height: 40vh;
  bottom: 10%;
  right: -5%;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  animation: floatShape2 20s infinite linear;
}

@keyframes floatShape1 {
  0% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotate(180deg) translateY(20px);
  }
  100% {
    transform: rotate(360deg) translateY(0);
  }
}

@keyframes floatShape2 {
  0% {
    transform: rotate(0deg) translateX(0);
  }
  50% {
    transform: rotate(-180deg) translateX(-20px);
  }
  100% {
    transform: rotate(-360deg) translateX(0);
  }
}
</style>
