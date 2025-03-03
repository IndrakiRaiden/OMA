<template>
  <div class="layout-container">
    <ClientOnly>
      <NavBar />
    </ClientOnly>
    <main class="main-content">
      <slot />
    </main>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

// Use route to help with component re-rendering
const route = useRoute()

// Check if we're in browser environment
const isBrowser = typeof window !== 'undefined'
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 64px; /* Height of the navbar */
}
</style>