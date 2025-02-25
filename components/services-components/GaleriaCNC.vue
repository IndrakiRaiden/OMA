<template>
  <section id="galeria" class="gallery-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Galería de <span class="text-primary">Maquinado CNC</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Explore nuestra galería de piezas y procesos de maquinado CNC que destacan nuestra precisión, calidad y versatilidad.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item">
          <div class="relative overflow-hidden rounded-lg group">
            <div class="w-full h-64 bg-gray-300 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
              <span class="text-gray-600">{{ item.title }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-white text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-gray-200 mb-4">{{ item.process }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" 
                      class="bg-primary/90 text-white text-xs px-2 py-1 rounded">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button @click="showMoreGallery = !showMoreGallery" class="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto">
          <span>{{ showMoreGallery ? 'Ver menos' : 'Ver más proyectos' }}</span>
          <i :class="showMoreGallery ? 'fas fa-chevron-up ml-2' : 'fas fa-chevron-down ml-2'"></i>
        </button>
      </div>

      <div v-if="showMoreGallery" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="(item, index) in additionalGalleryItems" :key="index" class="gallery-item">
          <div class="relative overflow-hidden rounded-lg group">
            <div class="w-full h-64 bg-gray-300 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
              <span class="text-gray-600">{{ item.title }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-white text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-gray-200 mb-4">{{ item.process }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" 
                      class="bg-primary/90 text-white text-xs px-2 py-1 rounded">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GaleriaCNC',
  data() {
    return {
      showMoreGallery: false,
      galleryItems: [
        {
          title: 'Componentes de precisión',
          process: 'Maquinado CNC de alta velocidad',
          tags: ['Acero inoxidable', 'Tolerancia ±0.005mm', 'Producción en serie']
        },
        {
          title: 'Piezas para la industria automotriz',
          process: 'Torneado CNC de precisión',
          tags: ['Aluminio 7075', 'Piezas complejas', 'Acabado superficial fino']
        },
        {
          title: 'Matrices industriales',
          process: 'Fresado CNC multieje',
          tags: ['Acero D2', 'Tratamiento térmico', 'Geometría compleja']
        },
        {
          title: 'Componentes aeroespaciales',
          process: 'Maquinado CNC de ultra precisión',
          tags: ['Titanio', 'Certificación aeroespacial', 'Piezas críticas']
        },
        {
          title: 'Herramientas especializadas',
          process: 'Maquinado CNC y tratamiento térmico',
          tags: ['Acero H13', 'Dureza 52-54 HRC', 'Resistencia al desgaste']
        },
        {
          title: 'Dispositivos médicos',
          process: 'Micro-maquinado CNC',
          tags: ['Acero inoxidable 316L', 'Acabado espejo', 'ISO 13485']
        }
      ],
      additionalGalleryItems: [
        {
          title: 'Engranajes de precisión',
          process: 'Maquinado CNC 5 ejes',
          tags: ['Bronce fosforado', 'Engranajes helicoidales', 'Alta resistencia']
        },
        {
          title: 'Componentes hidráulicos',
          process: 'Torneado y fresado CNC',
          tags: ['Acero 4140', 'Presión 5000 PSI', 'Sellado de precisión']
        },
        {
          title: 'Moldes para inyección',
          process: 'Electroerosión y fresado CNC',
          tags: ['Acero P20', 'Refrigeración conformal', 'Acabado fino']
        }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-section {
  background-color: var(--background-light);
}

.gallery-item {
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.text-primary {
  color: var(--content-primary);
}

.bg-primary {
  background-color: var(--content-primary);
}

.bg-primary-dark {
  background-color: var(--content-secondary);
}
</style>
