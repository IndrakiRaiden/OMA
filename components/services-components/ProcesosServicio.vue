<template>
  <section id="procesos" class="procesos-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        {{ titlePrefix }} <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        {{ description }}
      </p>

      <div class="process-timeline mb-20">
        <div v-for="(step, index) in steps" :key="index" class="process-step">
          <div class="process-number">{{ index + 1 }}</div>
          <div class="process-content">
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-description">{{ step.description }}</p>
            <ul v-if="step.points && step.points.length" class="process-points">
              <li v-for="(point, pointIndex) in step.points" :key="pointIndex">{{ point }}</li>
            </ul>
          </div>
          <div v-if="step.imageUrl" class="process-image">
            <img :src="step.imageUrl" :alt="step.title" class="rounded-lg shadow-md">
          </div>
        </div>
      </div>

      <div class="commitment-section bg-white p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-bold text-center mb-8">{{ commitmentTitle }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(commitment, index) in commitments" :key="index" class="commitment-card">
            <div class="commitment-icon">
              <i :class="commitment.icon"></i>
            </div>
            <h4 class="commitment-title">{{ commitment.title }}</h4>
            <p class="commitment-description">{{ commitment.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titlePrefix: {
    type: String,
    default: 'Nuestro'
  },
  titleHighlight: {
    type: String,
    default: 'Proceso'
  },
  description: {
    type: String,
    default: 'Seguimos un proceso estructurado y eficiente para garantizar resultados de alta calidad en cada proyecto de maquinado CNC.'
  },
  steps: {
    type: Array,
    default: () => [
      {
        title: 'Consulta y Evaluación',
        description: 'Analizamos sus requerimientos y especificaciones técnicas para determinar la mejor solución para su proyecto.',
        points: [
          'Revisión de planos y especificaciones',
          'Análisis de factibilidad',
          'Recomendaciones de materiales y procesos'
        ],
        imageUrl: ''
      },
      {
        title: 'Cotización Detallada',
        description: 'Preparamos una cotización detallada que incluye costos, tiempos de entrega y especificaciones del proyecto.',
        points: [
          'Desglose de costos transparente',
          'Estimación de tiempos realista',
          'Opciones de materiales y acabados'
        ],
        imageUrl: ''
      },
      {
        title: 'Programación CNC',
        description: 'Nuestros programadores desarrollan el código CNC optimizado para fabricar su pieza con la máxima precisión.',
        points: [
          'Programación CAD/CAM avanzada',
          'Simulación virtual para prevenir errores',
          'Optimización de trayectorias de herramienta'
        ],
        imageUrl: ''
      },
      {
        title: 'Fabricación',
        description: 'Ejecutamos el maquinado CNC siguiendo estrictos protocolos de calidad y utilizando herramientas de precisión.',
        points: [
          'Configuración precisa de máquinas',
          'Monitoreo constante del proceso',
          'Verificación dimensional durante la producción'
        ],
        imageUrl: ''
      },
      {
        title: 'Control de Calidad',
        description: 'Cada pieza es inspeccionada minuciosamente para garantizar que cumple con todas las especificaciones requeridas.',
        points: [
          'Inspección dimensional con equipos calibrados',
          'Verificación de acabados superficiales',
          'Documentación de resultados'
        ],
        imageUrl: ''
      },
      {
        title: 'Entrega',
        description: 'Empacamos y entregamos su pedido de manera segura, acompañado de toda la documentación necesaria.',
        points: [
          'Embalaje protector adecuado',
          'Documentación técnica completa',
          'Opciones de envío flexibles'
        ],
        imageUrl: ''
      }
    ]
  },
  commitmentTitle: {
    type: String,
    default: 'Nuestro Compromiso con la Calidad'
  },
  commitments: {
    type: Array,
    default: () => [
      {
        icon: 'fas fa-medal',
        title: 'Excelencia Técnica',
        description: 'Utilizamos equipos de última generación y personal altamente capacitado para garantizar la máxima precisión en cada pieza.'
      },
      {
        icon: 'fas fa-clock',
        title: 'Puntualidad',
        description: 'Nos comprometemos a cumplir con los plazos de entrega establecidos, respetando su planificación y necesidades.'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Servicio Personalizado',
        description: 'Trabajamos en estrecha colaboración con cada cliente para entender sus necesidades específicas y ofrecer soluciones a medida.'
      }
    ]
  }
})
</script>

<style scoped>
.procesos-section {
  background-color: var(--background-light);
}

.text-primary {
  color: var(--content-primary);
}

.process-timeline {
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 4px;
  background-color: var(--content-primary);
}

.process-step {
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .process-step {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

.process-number {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  z-index: 1;
}

.process-content {
  padding-bottom: 1.5rem;
}

.process-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--content-secondary);
}

.process-description {
  color: var(--content-text);
  margin-bottom: 1rem;
}

.process-points {
  padding-left: 1.5rem;
}

.process-points li {
  margin-bottom: 0.5rem;
  position: relative;
}

.process-points li::before {
  content: "";
  position: absolute;
  left: -1.5rem;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background-color: var(--content-primary);
  border-radius: 50%;
}

.process-image {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.process-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.commitment-card {
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--background-light);
  transition: transform 0.3s ease;
}

.commitment-card:hover {
  transform: translateY(-5px);
}

.commitment-icon {
  font-size: 2.5rem;
  color: var(--content-primary);
  margin-bottom: 1rem;
}

.commitment-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--content-secondary);
}

.commitment-description {
  color: var(--content-text);
  font-size: 0.95rem;
}
</style>
