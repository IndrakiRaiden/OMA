<template>
  <div>
    <NavBar />
    <div class="industries-page">
      <div class="hero text-white py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Industrias</h1>
          <p class="text-xl">Soluciones especializadas para diferentes sectores</p>
        </div>
      </div>

      <div class="industries-content py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Industry Card 1 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-industry text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Manufactura</h3>
              <p class="text-gray-700">
                Optimización de procesos y automatización para mejorar la eficiencia operativa.
              </p>
            </div>

            <!-- Industry Card 2 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-hospital text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Salud</h3>
              <p class="text-gray-700">
                Soluciones tecnológicas para mejorar la atención al paciente y la gestión hospitalaria.
              </p>
            </div>

            <!-- Industry Card 3 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-shopping-cart text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Retail</h3>
              <p class="text-gray-700">
                Transformación digital para mejorar la experiencia del cliente y aumentar las ventas.
              </p>
            </div>

            <!-- Industry Card 4 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-university text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Finanzas</h3>
              <p class="text-gray-700">
                Soluciones seguras y eficientes para instituciones financieras.
              </p>
            </div>

            <!-- Industry Card 5 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-truck text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Logística</h3>
              <p class="text-gray-700">
                Optimización de rutas y gestión de inventario para mejorar la cadena de suministro.
              </p>
            </div>

            <!-- Industry Card 6 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-graduation-cap text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Educación</h3>
              <p class="text-gray-700">
                Plataformas digitales y herramientas para modernizar la experiencia educativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
.industries-page {
  background-color: var(--content-light);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

.hero {
  background: var(--content-primary);
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-dark) 100%);
  opacity: 0.9;
  z-index: 1;
}

.hero > div {
  position: relative;
  z-index: 2;
}

.industry-card {
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--content-gray);
}

.industry-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-color: var(--content-secondary);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.icon-wrapper i {
  color: var(--content-light);
}

.industry-card h3 {
  color: var(--content-primary);
}

.industry-card p {
  color: var(--content-dark);
}

.industry-card:hover .icon-wrapper {
  transform: scale(1.1);
  background: var(--content-secondary);
}
</style>
