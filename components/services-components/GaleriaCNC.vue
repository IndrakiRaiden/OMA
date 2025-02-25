<template>
  <section id="galeria" class="gallery-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Galería de <span class="text-primary">Maquinado CNC</span>
      </h2>
      <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Explore nuestra galería de proyectos de maquinado CNC, mostrando la precisión y calidad de nuestro trabajo.
      </p>

      <!-- Filter Categories -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="(category, index) in categories" 
          :key="index"
          @click="filterCategory(category)" 
          :class="['filter-btn', activeCategory === category ? 'active' : '']"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
      
      <transition-group 
        v-else
        name="gallery-transition" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="(item, index) in filteredGalleryItems" 
          :key="item.title"
          class="gallery-item"
          @click="openLightbox(item)"
        >
          <div class="relative overflow-hidden rounded-lg group cursor-pointer gallery-item">
            <div class="gallery-item-image">
              <div class="flex flex-col items-center">
                <i :class="['fas', item.icon || 'fa-cogs', 'text-4xl text-gray-500 mb-3']"></i>
                <span class="text-gray-600 font-medium">{{ item.title }}</span>
              </div>
            </div>
            <div class="gallery-item-overlay">
              <h3 class="gallery-title slide-up">{{ item.title }}</h3>
              <p class="gallery-process slide-up delay-75">{{ item.process }}</p>
              <div class="gallery-tags slide-up delay-150">
                <span 
                  v-for="(tag, tagIndex) in item.tags" 
                  :key="tagIndex" 
                  class="gallery-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- Show More Button -->
      <div v-if="filteredAdditionalItems.length > 0 && !showMoreGallery" class="text-center mt-10">
        <button @click="showMore" class="show-more-btn" :disabled="isLoadingMore">
          <span v-if="isLoadingMore" class="inline-block animate-spin mr-2">
            <i class="fas fa-circle-notch"></i>
          </span>
          <span v-else>Ver más proyectos</span>
          <i v-if="!isLoadingMore" class="fas fa-chevron-down ml-2"></i>
        </button>
      </div>

      <!-- Additional Gallery Items (Shown when "Show More" is clicked) -->
      <transition name="fade">
        <div v-if="showMoreGallery" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div 
            v-for="(item, index) in filteredAdditionalItems" 
            :key="'additional-' + item.title"
            class="gallery-item"
            @click="openLightbox(item)"
          >
            <div class="relative overflow-hidden rounded-lg group cursor-pointer gallery-item">
              <div class="gallery-item-image">
                <div class="flex flex-col items-center">
                  <i :class="['fas', item.icon || 'fa-cogs', 'text-4xl text-gray-500 mb-3']"></i>
                  <span class="text-gray-600 font-medium">{{ item.title }}</span>
                </div>
              </div>
              <div class="gallery-item-overlay">
                <h3 class="gallery-title slide-up">{{ item.title }}</h3>
                <p class="gallery-process slide-up delay-75">{{ item.process }}</p>
                <div class="gallery-tags slide-up delay-150">
                  <span 
                    v-for="(tag, tagIndex) in item.tags" 
                    :key="tagIndex" 
                    class="gallery-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Lightbox -->
      <div v-if="lightbox.open" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">
            <i class="fas fa-times"></i>
          </button>
          <div class="lightbox-placeholder">
            <div class="flex flex-col items-center">
              <i :class="['fas', lightbox.item.icon || 'fa-cogs', 'text-6xl text-gray-500 mb-4']"></i>
              <span class="text-gray-600 text-xl font-medium">{{ lightbox.item.title }}</span>
            </div>
          </div>
          <div class="lightbox-details">
            <h3 class="text-2xl font-bold mb-3">{{ lightbox.item.title }}</h3>
            <p class="text-gray-600 mb-6">{{ lightbox.item.process }}</p>
            
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-2">Especificaciones:</h4>
              <div class="flex flex-wrap gap-2 mb-2">
                <span 
                  v-for="(tag, tagIndex) in lightbox.item.tags" 
                  :key="tagIndex" 
                  class="lightbox-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-2">Descripción:</h4>
              <p class="text-gray-600">
                {{ lightbox.item.description || 'Este proyecto demuestra nuestra capacidad para crear componentes de alta precisión utilizando tecnología CNC avanzada, cumpliendo con especificaciones exactas y garantizando la más alta calidad.' }}
              </p>
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
      activeCategory: 'Todos',
      isLoading: false,
      isLoadingMore: false,
      lightbox: {
        open: false,
        item: {}
      },
      categories: ['Todos', 'Componentes', 'Automotriz', 'Moldes', 'Aeroespacial', 'Médico'],
      galleryItems: [
        {
          title: 'Componentes de precisión',
          process: 'Maquinado CNC de alta velocidad',
          tags: ['Acero inoxidable', 'Tolerancia ±0.005mm', 'Producción en serie'],
          icon: 'fa-cog',
          category: 'Componentes'
        },
        {
          title: 'Ejes y flechas',
          process: 'Torneado CNC de precisión',
          tags: ['Aluminio 7075', 'Piezas complejas', 'Acabado superficial fino'],
          icon: 'fa-wrench',
          category: 'Automotriz'
        },
        {
          title: 'Moldes industriales',
          process: 'Fresado CNC multieje',
          tags: ['Acero D2', 'Tratamiento térmico', 'Geometría compleja'],
          icon: 'fa-industry',
          category: 'Moldes'
        },
        {
          title: 'Componentes aeroespaciales',
          process: 'Maquinado CNC de ultra precisión',
          tags: ['Titanio', 'Certificación aeroespacial', 'Piezas críticas'],
          icon: 'fa-plane',
          category: 'Aeroespacial'
        },
        {
          title: 'Matrices de estampado',
          process: 'Maquinado CNC y tratamiento térmico',
          tags: ['Acero H13', 'Dureza 52-54 HRC', 'Resistencia al desgaste'],
          icon: 'fa-hammer',
          category: 'Matrices'
        },
        {
          title: 'Componentes médicos',
          process: 'Micro-maquinado CNC',
          tags: ['Acero inoxidable 316L', 'Acabado espejo', 'ISO 13485'],
          icon: 'fa-heartbeat',
          category: 'Médico'
        }
      ],
      additionalGalleryItems: [
        {
          title: 'Engranajes de precisión',
          process: 'Maquinado CNC 5 ejes',
          tags: ['Bronce fosforado', 'Engranajes helicoidales', 'Alta resistencia'],
          icon: 'fa-cogs',
          category: 'Componentes'
        },
        {
          title: 'Conectores hidráulicos',
          process: 'Torneado y fresado CNC',
          tags: ['Acero 4140', 'Presión 5000 PSI', 'Sellado de precisión'],
          icon: 'fa-tint',
          category: 'Hidráulica'
        },
        {
          title: 'Moldes de inyección',
          process: 'Electroerosión y fresado CNC',
          tags: ['Acero P20', 'Refrigeración conformal', 'Acabado fino'],
          icon: 'fa-fill-drip',
          category: 'Moldes'
        }
      ]
    }
  },
  computed: {
    filteredGalleryItems() {
      if (this.activeCategory === 'Todos') {
        return this.galleryItems;
      }
      return this.galleryItems.filter(item => item.category === this.activeCategory);
    },
    filteredAdditionalItems() {
      if (this.activeCategory === 'Todos') {
        return this.additionalGalleryItems;
      }
      return this.additionalGalleryItems.filter(item => item.category === this.activeCategory);
    }
  },
  methods: {
    filterCategory(category) {
      if (this.activeCategory === category) return;
      
      this.isLoading = true;
      
      // Add a small delay to make the transition smoother
      setTimeout(() => {
        this.activeCategory = category;
        // Reset visible count when changing categories
        this.showMoreGallery = false;
        
        // Add a small delay to simulate loading
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      }, 50);
    },
    showMore() {
      this.isLoadingMore = true;
      
      // Add a small delay to make the transition smoother
      setTimeout(() => {
        this.showMoreGallery = true;
        
        // Add a small delay to simulate loading
        setTimeout(() => {
          this.isLoadingMore = false;
        }, 300);
      }, 50);
    },
    openLightbox(item) {
      this.lightbox.item = item;
      this.lightbox.open = true;
      document.body.classList.add('overflow-hidden');
    },
    closeLightbox() {
      this.lightbox.open = false;
      document.body.classList.remove('overflow-hidden');
    }
  }
}
</script>

<style scoped>
.gallery-section {
  background-color: var(--background-light);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.gallery-item-image {
  width: 100%;
  height: 16rem;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-item-image {
  transform: scale(1.1);
}

.gallery-item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, 
    var(--color-secondary) 0%, 
    rgba(75, 110, 140, 0.85) 50%, 
    rgba(75, 110, 140, 0.7) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.75rem;
  backdrop-filter: blur(3px);
}

.gallery-item:hover .gallery-item-overlay {
  opacity: 1;
}

.gallery-tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: var(--color-accent);
  color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.slide-up {
  transform: translateY(1.5rem);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.gallery-item:hover .slide-up {
  transform: translateY(0);
  opacity: 1;
}

.delay-75 {
  transition-delay: 75ms;
}

.delay-150 {
  transition-delay: 150ms;
}

.gallery-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.gallery-process {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.gallery-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: #f3f4f6;
  color: #4b5563;
}

.filter-btn:hover {
  background-color: #e5e7eb;
}

.filter-btn.active {
  background-color: var(--content-primary);
  color: white;
}

.show-more-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: white;
  color: var(--content-primary);
  border: 2px solid var(--content-primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.show-more-btn:hover {
  background-color: var(--content-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding: 2rem;
}

.lightbox-content {
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.lightbox-placeholder {
  height: 300px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.lightbox-details {
  padding: 2rem;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.lightbox-close:hover {
  background-color: #f3f4f6;
  transform: rotate(90deg);
}

.lightbox-tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #f3f4f6;
  color: var(--color-secondary);
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Gallery transitions */
.gallery-transition-move {
  transition: transform 0.6s ease-in-out;
}

.gallery-transition-enter-active {
  transition: all 0.4s ease-out;
  transition-delay: 0.2s;
}

.gallery-transition-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}

.gallery-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-transition-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (min-width: 768px) {
  .lightbox-content {
    flex-direction: row;
    max-height: 80vh;
  }
  
  .lightbox-placeholder {
    width: 50%;
    height: auto;
  }
  
  .lightbox-details {
    width: 50%;
    overflow-y: auto;
  }
}
</style>
