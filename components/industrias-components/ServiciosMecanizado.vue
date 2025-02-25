<template>
  <section id="servicios" class="services-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Nuestros <span class="text-primary">Servicios de Mecanizado</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Ofrecemos servicios de mecanizado CNC de alta precisión para satisfacer sus necesidades específicas de fabricación.
      </p>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div class="service-card">
          <div class="icon-container">
            <i class="fas fa-cog"></i>
          </div>
          <h3>Fresado CNC</h3>
          <p>Mecanizado de precisión con fresadoras CNC de última generación para piezas complejas y acabados superiores.</p>
          <ul class="feature-list">
            <li>Alta precisión dimensional</li>
            <li>Acabados superficiales superiores</li>
            <li>Capacidad multieje</li>
          </ul>
        </div>

        <!-- Service Card 2 -->
        <div class="service-card">
          <div class="icon-container">
            <i class="fas fa-sync"></i>
          </div>
          <h3>Torneado CNC</h3>
          <p>Fabricación de piezas cilíndricas con tornos CNC para máxima precisión y eficiencia.</p>
          <ul class="feature-list">
            <li>Control preciso de dimensiones</li>
            <li>Producción en serie</li>
            <li>Acabados de alta calidad</li>
          </ul>
        </div>

        <!-- Service Card 3 -->
        <div class="service-card">
          <div class="icon-container">
            <i class="fas fa-drafting-compass"></i>
          </div>
          <h3>Diseño CAD/CAM</h3>
          <p>Servicios completos de diseño y programación para optimizar su producción.</p>
          <ul class="feature-list">
            <li>Modelado 3D avanzado</li>
            <li>Optimización de procesos</li>
            <li>Simulación de mecanizado</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiciosMecanizado'
}
</script>

<style scoped>
.services-section {
  padding: 4rem 0;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.icon-container {
  width: 60px;
  height: 60px;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon-container i {
  color: white;
  font-size: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--content-primary);
}

.feature-list {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
  position: relative;
}

.feature-list li::before {
  content: '•';
  color: var(--content-primary);
  position: absolute;
  left: -1rem;
}
</style>
