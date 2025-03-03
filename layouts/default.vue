<template>
  <div>
    <ClientOnly>
      <NavBar />
    </ClientOnly>
    <slot :key="$route.fullPath" />
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
div {
  min-height: 100vh;
}
</style>