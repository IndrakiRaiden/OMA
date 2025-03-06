<template>
  <div class="layout-container">
    <ClientOnly>
      <NavBar />
    </ClientOnly>
    <Transition name="page" mode="out-in">
      <main class="main-content">
        <slot />
      </main>
    </Transition>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
