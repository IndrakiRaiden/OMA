<template>
  <div class="layout-container">
    <main class="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
// Industry layout - includes Footer but not NavBar
// NavBar should be included directly in each industry page if needed
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
