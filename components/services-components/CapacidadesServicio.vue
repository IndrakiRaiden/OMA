<template>
  <section id="capacidades" class="capacidades-section py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        {{ titlePrefix }} <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        {{ description }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(capacity, index) in capacities" :key="index" class="capacity-card">
          <div class="icon-container">
            <i :class="capacity.icon || 'fas fa-cogs'"></i>
          </div>
          <h3>{{ capacity.title }}</h3>
          <ul class="capacity-list">
            <li v-for="(item, itemIndex) in capacity.items" :key="itemIndex">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titlePrefix: {
    type: String,
    default: 'Nuestras'
  },
  titleHighlight: {
    type: String,
    default: 'Capacidades'
  },
  description: {
    type: String,
    default: 'Contamos con equipos de última generación y personal altamente capacitado para ofrecer soluciones de maquinado CNC de alta calidad.'
  },
  capacities: {
    type: Array,
    default: () => [
      {
        icon: 'fas fa-ruler-combined',
        title: 'Dimensiones máximas',
        items: [
          'Diámetros de hasta 10 pulgadas',
          'Longitud de hasta 14 pulgadas',
          'Tolerancias de ±0.001 mm'
        ]
      },
      {
        icon: 'fas fa-tools',
        title: 'Equipos CNC',
        items: [
          'Tornos CNC de 2 y 4 ejes',
          'Centros de maquinado vertical',
          'Centros de maquinado horizontal',
          'Fresadoras CNC de 3 ejes'
        ]
      },
      {
        icon: 'fas fa-industry',
        title: 'Capacidad de producción',
        items: [
          'Prototipos y piezas únicas',
          'Series cortas y medianas',
          'Producción de alto volumen',
          'Tiempos de entrega optimizados'
        ]
      }
    ]
  }
})
</script>

<style scoped>
.capacidades-section {
  background-color: var(--background-light);
}

.text-primary {
  color: var(--content-primary);
}

.capacity-card {
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.capacity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.icon-container {
  background-color: var(--content-primary);
  width: 60px;
  height: 60px;
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
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--content-text);
}

.capacity-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background-color: var(--content-primary);
  border-radius: 50%;
}
</style>
