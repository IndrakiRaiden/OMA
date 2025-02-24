<template>
  <div>
    <NavBar />
    <slot />
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
</script>

<style scoped>
div {
  min-height: 100vh;
}
</style>