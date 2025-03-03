<template>
  <section id="capacidades" class="capacidades-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        <span class="text-gray-800">{{ titlePrefix }}</span>&nbsp;
        <span class="text-secondary">{{ titleHighlight }}</span>
      </h2>
      
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        {{ description }}
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(capacity, index) in capacities" 
          :key="index"
          class="capacity-card"
        >
          <div class="card-inner p-8">
            <div class="icon-container mb-6">
              <i :class="['fas', capacity.icon || 'fa-cogs']"></i>
            </div>
            
            <h3 class="text-xl font-semibold mb-3">{{ capacity.title }}</h3>
            <p class="text-gray-600 mb-6">{{ capacity.description }}</p>
            
            <ul v-if="capacity.items && capacity.items.length" class="space-y-2">
              <li 
                v-for="(item, itemIndex) in capacity.items" 
                :key="itemIndex"
                class="flex items-start"
              >
                <span class="inline-block mr-2 text-accent">
                  <i class="fas fa-check-circle"></i>
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
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
    default: 'Nuestras'
  },
  titleHighlight: {
    type: String,
    default: 'Capacidades'
  },
  description: {
    type: String,
    default: 'Contamos con la tecnología y experiencia para ofrecer soluciones de alta calidad y precisión.'
  },
  capacities: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.capacidades-section {
  background-color: var(--content-white);
}

.text-accent {
  color: var(--content-accent);
}

.text-secondary {
  color: var(--content-secondary);
}

.text-primary {
  color: var(--content-primary);
}

.capacity-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #edf2f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.capacity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  color: white;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.capacity-card:hover .icon-container {
  transform: scale(1.1);
  background: linear-gradient(135deg, var(--content-primary) 20%, var(--content-secondary) 80%);
}

@media (max-width: 768px) {
  .capacity-card {
    margin-bottom: 1.5rem;
  }
}
</style>
