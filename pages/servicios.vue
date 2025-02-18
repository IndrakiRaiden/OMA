<template>
  <div class="services-page">
    <div class="hero bg-primary-900 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
        <p class="text-xl">Soluciones innovadoras para tu negocio</p>
      </div>
    </div>

    <div class="services-content py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div class="service-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-analytics text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Análisis de Datos</h3>
            <p class="text-gray-600">
              Transformamos sus datos en información accionable para tomar mejores decisiones de negocio.
            </p>
          </div>

          <!-- Service Card 2 -->
          <div class="service-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-robot text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Automatización</h3>
            <p class="text-gray-600">
              Optimizamos sus procesos mediante soluciones de automatización inteligente.
            </p>
          </div>

          <!-- Service Card 3 -->
          <div class="service-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-brain text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Inteligencia Artificial</h3>
            <p class="text-gray-600">
              Implementamos soluciones de IA para potenciar su ventaja competitiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any required imports and logic here
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}
</style>
