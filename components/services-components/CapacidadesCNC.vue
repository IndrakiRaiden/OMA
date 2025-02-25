<template>
  <section id="capacidades" class="capacidades-section py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Nuestras <span class="text-primary">Capacidades</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Contamos con equipos de última generación y personal altamente capacitado para ofrecer soluciones de maquinado CNC de alta calidad.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="capacity-card">
          <div class="icon-container">
            <i class="fas fa-ruler-combined"></i>
          </div>
          <h3>Dimensiones máximas</h3>
          <ul class="capacity-list">
            <li>Diámetros de hasta 10 pulgadas</li>
            <li>Longitud de hasta 14 pulgadas</li>
            <li>Tolerancias de ±0.001 mm</li>
          </ul>
        </div>

        <div class="capacity-card">
          <div class="icon-container">
            <i class="fas fa-cogs"></i>
          </div>
          <h3>Equipamiento</h3>
          <ul class="capacity-list">
            <li>Tornos CNC de 5 ejes</li>
            <li>Centros de mecanizado verticales</li>
            <li>Sistemas CAD/CAM avanzados</li>
            <li>Equipos de medición de precisión</li>
          </ul>
        </div>

        <div class="capacity-card">
          <div class="icon-container">
            <i class="fas fa-industry"></i>
          </div>
          <h3>Producción</h3>
          <ul class="capacity-list">
            <li>Piezas unitarias y series</li>
            <li>Tiempos de entrega optimizados</li>
            <li>Programación flexible</li>
            <li>Gestión de proyectos integral</li>
          </ul>
        </div>

        <div class="capacity-card">
          <div class="icon-container">
            <i class="fas fa-certificate"></i>
          </div>
          <h3>Certificaciones</h3>
          <ul class="capacity-list">
            <li>ISO 9001:2015</li>
            <li>Sistema de calidad documentado</li>
            <li>Trazabilidad completa</li>
            <li>Personal certificado</li>
          </ul>
        </div>

        <div class="capacity-card">
          <div class="icon-container">
            <i class="fas fa-tasks"></i>
          </div>
          <h3>Control de calidad</h3>
          <ul class="capacity-list">
            <li>Inspección dimensional</li>
            <li>Verificación de propiedades</li>
            <li>Documentación detallada</li>
            <li>Pruebas no destructivas</li>
          </ul>
        </div>

        <div class="capacity-card">
          <div class="icon-container">
            <i class="fas fa-tools"></i>
          </div>
          <h3>Servicios adicionales</h3>
          <ul class="capacity-list">
            <li>Tratamientos térmicos</li>
            <li>Acabados superficiales</li>
            <li>Recubrimientos especiales</li>
            <li>Ensambles y subconjuntos</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CapacidadesCNC'
}
</script>

<style scoped>
.capacity-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.capacity-card:hover {
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

.capacity-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--content-secondary);
}

.capacity-list {
  list-style-type: none;
  padding: 0;
}

.capacity-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.capacity-list li:last-child {
  border-bottom: none;
}

.text-primary {
  color: var(--content-primary);
}
</style>
