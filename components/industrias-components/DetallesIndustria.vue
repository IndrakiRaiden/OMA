<template>
  <section id="detalles" class="detalles-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        <span class="text-gray-800">{{ titlePrefix }}</span>&nbsp;
        <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      
      <div class="flex flex-col lg:flex-row items-center gap-10">
        <div class="lg:w-1/2 order-2 lg:order-1">
          <p class="text-lg text-gray-700 mb-8" v-html="description"></p>
          
          <div v-if="features && features.length" class="features">
            <h3 class="text-2xl font-semibold mb-4">Especialidades</h3>
            <ul class="space-y-3">
              <li v-for="(feature, index) in features" :key="index" class="flex items-start">
                <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 mt-1 bg-primary rounded-full text-white">
                  <i class="fas fa-check text-sm"></i>
                </span>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="image-container rounded-xl overflow-hidden shadow-xl">
            <img 
              :src="imageUrl || 'https://source.unsplash.com/featured/600x400?industry'" 
              :alt="titleHighlight"
              class="w-full h-auto object-cover aspect-video"
            />
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
    default: 'Soluciones para'
  },
  titleHighlight: {
    type: String,
    default: 'la Industria'
  },
  description: {
    type: String,
    default: 'Ofrecemos soluciones especializadas para esta industria, adaptadas a las necesidades específicas del sector.'
  },
  features: {
    type: Array,
    default: () => []
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.detalles-section {
  background-color: var(--content-light);
  position: relative;
}

.text-primary {
  color: var(--content-primary);
}

.text-accent {
  color: var(--content-accent);
}

.text-secondary {
  color: var(--content-secondary);
}

.bg-primary {
  background-color: var(--content-primary);
}

.bg-accent {
  background-color: var(--content-accent);
}

.bg-secondary {
  background-color: var(--content-secondary);
}

.image-container {
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, rgba(var(--secondary-rgb), 0.1), rgba(var(--accent-rgb), 0.1));
  z-index: 1;
}

.image-container:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .detalles-section {
    padding: 3rem 0;
  }
}
</style>
