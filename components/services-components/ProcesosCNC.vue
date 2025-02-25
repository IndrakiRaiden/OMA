<template>
  <section id="procesos" class="process-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Nuestro <span class="text-primary">Proceso de Trabajo</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Seguimos un proceso metódico y riguroso para garantizar resultados excepcionales en cada proyecto de maquinado CNC.
      </p>

      <div class="relative">
        <!-- Timeline line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
        
        <!-- Process steps -->
        <div class="space-y-12">
          <!-- Step 1 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-3">1. Análisis y cotización</h3>
              <p class="text-gray-600">Evaluamos sus requerimientos técnicos, planos o modelos 3D para entender completamente su proyecto. Realizamos un análisis de factibilidad y preparamos una cotización detallada.</p>
            </div>
            <div class="order-1 md:order-2 mb-6 md:mb-0 md:w-1/2 flex justify-center md:justify-start md:pl-12">
              <div class="process-icon">
                <i class="fas fa-file-contract"></i>
              </div>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="order-2 mb-6 md:mb-0 md:w-1/2 md:pr-12 flex justify-center md:justify-end">
              <div class="process-icon">
                <i class="fas fa-drafting-compass"></i>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
              <h3 class="text-2xl font-bold mb-3">2. Diseño y programación</h3>
              <p class="text-gray-600">Optimizamos su diseño para la fabricación y desarrollamos programas CNC precisos utilizando software CAD/CAM avanzado. Simulamos el proceso para garantizar la eficiencia.</p>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-3">3. Configuración y preparación</h3>
              <p class="text-gray-600">Seleccionamos y preparamos el material adecuado, configuramos las máquinas CNC, y realizamos los ajustes necesarios para obtener resultados óptimos.</p>
            </div>
            <div class="order-1 md:order-2 mb-6 md:mb-0 md:w-1/2 flex justify-center md:justify-start md:pl-12">
              <div class="process-icon">
                <i class="fas fa-tools"></i>
              </div>
            </div>
          </div>
          
          <!-- Step 4 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="order-2 mb-6 md:mb-0 md:w-1/2 md:pr-12 flex justify-center md:justify-end">
              <div class="process-icon">
                <i class="fas fa-cogs"></i>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
              <h3 class="text-2xl font-bold mb-3">4. Maquinado CNC</h3>
              <p class="text-gray-600">Ejecutamos el proceso de maquinado con máquinas CNC de última generación, bajo supervisión constante para garantizar precisión y calidad en cada pieza.</p>
            </div>
          </div>
          
          <!-- Step 5 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-3">5. Control de calidad</h3>
              <p class="text-gray-600">Realizamos inspecciones dimensionales y de acabado superficial con equipos de medición de precisión para verificar que cada pieza cumple con las especificaciones requeridas.</p>
            </div>
            <div class="order-1 md:order-2 mb-6 md:mb-0 md:w-1/2 flex justify-center md:justify-start md:pl-12">
              <div class="process-icon">
                <i class="fas fa-check-double"></i>
              </div>
            </div>
          </div>
          
          <!-- Step 6 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="order-2 mb-6 md:mb-0 md:w-1/2 md:pr-12 flex justify-center md:justify-end">
              <div class="process-icon">
                <i class="fas fa-truck-loading"></i>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
              <h3 class="text-2xl font-bold mb-3">6. Acabados y entrega</h3>
              <p class="text-gray-600">Aplicamos los acabados finales requeridos, empacamos adecuadamente el producto y lo entregamos con su documentación técnica completa, cumpliendo con los plazos acordados.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-20 bg-white p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-bold mb-6 text-center">Nuestro compromiso con la calidad</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-medal text-2xl text-primary"></i>
            </div>
            <h4 class="font-bold mb-2">Precisión garantizada</h4>
            <p class="text-gray-600">Tolerancias estrictas en cada pieza fabricada</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-clock text-2xl text-primary"></i>
            </div>
            <h4 class="font-bold mb-2">Puntualidad</h4>
            <p class="text-gray-600">Cumplimiento riguroso de los plazos de entrega</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-sync-alt text-2xl text-primary"></i>
            </div>
            <h4 class="font-bold mb-2">Mejora continua</h4>
            <p class="text-gray-600">Optimización constante de nuestros procesos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcesosCNC'
}
</script>

<style scoped>
.process-section {
  background-color: var(--content-light);
}

.process-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(145deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.process-icon i {
  color: white;
  font-size: 2rem;
}

.text-primary {
  color: var(--content-primary);
}

@media (max-width: 768px) {
  .process-icon {
    margin-bottom: 20px;
  }
}
</style>
