<template>
  <div class="home">
    <NavBar />
    <Hero />
    <main>
      <Solutions />
      <Explanation />
      <HowItWorks />
      <Industries />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import Hero from '~/components/index-components/Hero.vue'
import Solutions from '~/components/index-components/Solutions.vue'
import Explanation from '~/components/index-components/Explanation.vue'
import HowItWorks from '~/components/index-components/HowItWorks.vue'
import Industries from '~/components/index-components/Industries.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    Footer,
    Hero,
    Solutions,
    Explanation,
    HowItWorks,
    Industries
  }
}
</script>

<style scoped>
.home {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  min-height: 100vh;
}

main {
  position: relative;
  z-index: 1;
}
</style>