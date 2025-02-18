<template>
  <div class="industries-page">
    <div class="hero bg-primary-900 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Industrias</h1>
        <p class="text-xl">Soluciones especializadas para diferentes sectores</p>
      </div>
    </div>

    <div class="industries-content py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Industry Card 1 -->
          <div class="industry-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-industry text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Manufactura</h3>
            <p class="text-gray-600">
              Optimización de procesos y automatización para mejorar la eficiencia operativa.
            </p>
          </div>

          <!-- Industry Card 2 -->
          <div class="industry-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-hospital text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Salud</h3>
            <p class="text-gray-600">
              Soluciones tecnológicas para mejorar la atención al paciente y la gestión hospitalaria.
            </p>
          </div>

          <!-- Industry Card 3 -->
          <div class="industry-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-shopping-cart text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Retail</h3>
            <p class="text-gray-600">
              Transformación digital para mejorar la experiencia del cliente y aumentar las ventas.
            </p>
          </div>

          <!-- Industry Card 4 -->
          <div class="industry-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-university text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Finanzas</h3>
            <p class="text-gray-600">
              Soluciones seguras y eficientes para instituciones financieras.
            </p>
          </div>

          <!-- Industry Card 5 -->
          <div class="industry-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-truck text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Logística</h3>
            <p class="text-gray-600">
              Optimización de rutas y gestión de inventario para mejorar la cadena de suministro.
            </p>
          </div>

          <!-- Industry Card 6 -->
          <div class="industry-card p-6 rounded-lg shadow-lg bg-white">
            <div class="mb-4">
              <i class="fas fa-graduation-cap text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Educación</h3>
            <p class="text-gray-600">
              Plataformas digitales y herramientas para modernizar la experiencia educativa.
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
.industries-page {
  min-height: 100vh;
}

.industry-card {
  transition: transform 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-5px);
}
</style>
