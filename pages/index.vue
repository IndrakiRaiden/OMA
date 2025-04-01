<template>
  <main class="home-page">
    <Hero />
    <Benefits />
    <Industries />
    <div class="section-spacer"></div>
    <CallToAction />
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
</script>

<script>
import Hero from '~/components/Hero.vue'
import Benefits from '~/components/index-components/Benefits.vue'
import Industries from '~/components/index-components/Industries.vue'
import CallToAction from '~/components/index-components/CallToAction.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    Benefits,
    Industries,
    CallToAction
  }
}
</script>

<style scoped>
.home-page {
  background-color: var(--content-light);
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

.section-spacer {
  height: 6rem;
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
  .section-spacer {
    height: 4rem;
  }
}
</style>