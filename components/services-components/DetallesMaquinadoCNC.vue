<template>
  <section id="detalles" class="details-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Servicio de <span class="text-primary">Maquinado CNC</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Ofrecemos servicios de maquinado CNC de alta precisión para satisfacer sus necesidades específicas de fabricación con los más altos estándares de calidad.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 class="text-2xl font-bold mb-6">Productos que fabricamos</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <div class="mr-3 mt-1 text-primary">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <span class="font-semibold">Piezas de precisión</span> - Rango de diámetros de hasta 10 pulgadas x 14 pulgadas de largo.
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-3 mt-1 text-primary">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <span class="font-semibold">Componentes industriales</span> - Cilindros, pistones de inyección, poleas, chumaceras y sprockets.
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-3 mt-1 text-primary">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <span class="font-semibold">Herramientas especializadas</span> - Bujes, punzones y matrices para diversas aplicaciones industriales.
              </div>
            </li>
          </ul>
          
          <h3 class="text-2xl font-bold mt-10 mb-6">Materiales que utilizamos</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <h4 class="font-semibold mb-2 text-primary">Aceros Grado Herramienta</h4>
              <ul class="space-y-1 pl-4">
                <li>A2 - Alta resistencia y tenacidad</li>
                <li>D2 - Resistencia extrema al desgaste</li>
                <li>O1 - Templabilidad y estabilidad</li>
                <li>M2 - Alta velocidad y durabilidad</li>
                <li>S7 - Resistencia al impacto</li>
                <li>H13 - Trabajo en caliente</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2 text-primary">Aceros Grado Maquinaria</h4>
              <ul class="space-y-1 pl-4">
                <li>A36 - Estructural de uso general</li>
                <li>A572 - Alta resistencia y bajo peso</li>
                <li>4140 - Templabilidad y dureza</li>
                <li>1018 - Versátil de uso general</li>
                <li>8620 - Carburización y resistencia</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-6">
            <h4 class="font-semibold mb-2 text-primary">Otros Materiales</h4>
            <p>Aluminio, acero inoxidable, plásticos industriales, bronce, latón, cobre y acero inoxidable grado alimenticio.</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="rounded-lg mb-6 w-full h-64 bg-gray-300 flex items-center justify-center">
            <span class="text-gray-600">Imagen de Maquinado CNC</span>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Ventajas del Maquinado CNC</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="mr-3 mt-1 text-primary">
                  <i class="fas fa-star"></i>
                </div>
                <div>
                  <span class="font-semibold">Precisión excepcional</span> - Tolerancias de hasta ±0.001 mm para piezas críticas.
                </div>
              </li>
              <li class="flex items-start">
                <div class="mr-3 mt-1 text-primary">
                  <i class="fas fa-star"></i>
                </div>
                <div>
                  <span class="font-semibold">Repetibilidad</span> - Producción consistente para series de piezas idénticas.
                </div>
              </li>
              <li class="flex items-start">
                <div class="mr-3 mt-1 text-primary">
                  <i class="fas fa-star"></i>
                </div>
                <div>
                  <span class="font-semibold">Versatilidad</span> - Capacidad para producir geometrías complejas y precisas.
                </div>
              </li>
              <li class="flex items-start">
                <div class="mr-3 mt-1 text-primary">
                  <i class="fas fa-star"></i>
                </div>
                <div>
                  <span class="font-semibold">Eficiencia</span> - Tiempos de producción optimizados y menor desperdicio de material.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetallesMaquinadoCNC'
}
</script>

<style scoped>
.details-section {
  background-color: var(--background-light);
}

h3 {
  color: var(--content-secondary);
}

.text-primary {
  color: var(--content-primary);
}
</style>
