<template>
  <div class="home">
    <NavBar />
    <Hero />
    <main>
      <Solutions />
      <Timeline />
      <Benefits />
      <Explanation />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import Hero from '~/components/Hero.vue'
import Solutions from '~/components/index-components/Solutions.vue'
import Timeline from '~/components/index-components/Timeline.vue'
import Benefits from '~/components/index-components/Benefits.vue'
import Explanation from '~/components/index-components/Explanation.vue'
import HowItWorks from '~/components/index-components/HowItWorks.vue'
import Industries from '~/components/index-components/Industries.vue'
import Testimonials from '~/components/index-components/Testimonials.vue'
import CallToAction from '~/components/index-components/CallToAction.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    Footer,
    Hero,
    Solutions,
    Timeline,
    Benefits,
    Explanation,
    HowItWorks,
    Industries,
    Testimonials,
    CallToAction
  }
}
</script>

<style scoped>
.home {
  background-color: var(--content-light);
  color: var(--content-primary);
  min-height: 100vh;
}

main {
  position: relative;
  z-index: 1;
  background-color: var(--content-light);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .solution-card {
    padding: 2rem;  
  }
}
</style>