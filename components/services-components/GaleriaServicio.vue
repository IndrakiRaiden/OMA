<template>
  <section id="galeria" class="galeria-section py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        {{ titlePrefix }} <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        {{ description }}
      </p>

      <div class="gallery-filters mb-8 flex flex-wrap justify-center gap-4">
        <button 
          class="filter-btn" 
          :class="{ 'active': activeCategory === 'all' }"
          @click="setActiveCategory('all')"
        >
          Todos
        </button>
        <button 
          v-for="category in galleryCategories" 
          :key="category.id"
          class="filter-btn" 
          :class="{ 'active': activeCategory === category.id }"
          @click="setActiveCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="gallery-grid">
        <div 
          v-for="item in displayedItems" 
          :key="item.id"
          class="gallery-item"
          @click="openLightbox(item)"
        >
          <div class="gallery-item-image">
            <img :src="item.imageUrl" :alt="item.title" class="w-full h-full object-cover">
            <div class="gallery-item-overlay">
              <div class="gallery-item-category">{{ getCategoryName(item.categoryId) }}</div>
              <div class="gallery-item-title">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMoreItems" class="text-center mt-12">
        <button @click="showMoreItems" class="show-more-btn">
          {{ showMoreButtonText }}
        </button>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">&times;</button>
          <div class="lightbox-image">
            <img :src="currentItem.imageUrl" :alt="currentItem.title">
          </div>
          <div class="lightbox-details">
            <h3 class="lightbox-title">{{ currentItem.title }}</h3>
            <p class="lightbox-category">{{ getCategoryName(currentItem.categoryId) }}</p>
            <p class="lightbox-description">{{ currentItem.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  titlePrefix: {
    type: String,
    default: 'Nuestra'
  },
  titleHighlight: {
    type: String,
    default: 'Galería'
  },
  description: {
    type: String,
    default: 'Explore nuestra galería de proyectos de maquinado CNC completados, mostrando la precisión y calidad de nuestro trabajo.'
  },
  showMoreButtonText: {
    type: String,
    default: 'Mostrar más'
  },
  galleryItems: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Pieza de precisión para industria aeroespacial',
        description: 'Componente de aluminio 7075 con tolerancias de ±0.001 mm para aplicación aeroespacial.',
        imageUrl: '/images/gallery/cnc-1.jpg',
        categoryId: 'aerospace'
      },
      {
        id: 2,
        title: 'Engranajes de alta resistencia',
        description: 'Conjunto de engranajes fabricados en acero 4140 tratado térmicamente para maquinaria industrial.',
        imageUrl: '/images/gallery/cnc-2.jpg',
        categoryId: 'industrial'
      },
      {
        id: 3,
        title: 'Moldes para inyección de plástico',
        description: 'Moldes de precisión fabricados en acero P20 para inyección de componentes plásticos.',
        imageUrl: '/images/gallery/cnc-3.jpg',
        categoryId: 'molds'
      },
      {
        id: 4,
        title: 'Componentes médicos',
        description: 'Piezas de titanio para implantes médicos con acabado superficial de alta calidad.',
        imageUrl: '/images/gallery/cnc-4.jpg',
        categoryId: 'medical'
      },
      {
        id: 5,
        title: 'Prototipos funcionales',
        description: 'Prototipos mecanizados en aluminio para validación de diseño antes de producción en serie.',
        imageUrl: '/images/gallery/cnc-5.jpg',
        categoryId: 'prototypes'
      },
      {
        id: 6,
        title: 'Piezas para sector automotriz',
        description: 'Componentes mecanizados para sistemas de transmisión automotriz.',
        imageUrl: '/images/gallery/cnc-6.jpg',
        categoryId: 'automotive'
      }
    ]
  },
  galleryCategories: {
    type: Array,
    default: () => [
      { id: 'aerospace', name: 'Aeroespacial' },
      { id: 'industrial', name: 'Industrial' },
      { id: 'molds', name: 'Moldes' },
      { id: 'medical', name: 'Médico' },
      { id: 'prototypes', name: 'Prototipos' },
      { id: 'automotive', name: 'Automotriz' }
    ]
  },
  itemsPerPage: {
    type: Number,
    default: 6
  }
})

const activeCategory = ref('all')
const visibleItems = ref(props.itemsPerPage)
const lightboxOpen = ref(false)
const currentItem = ref(null)

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return props.galleryItems
  }
  return props.galleryItems.filter(item => item.categoryId === activeCategory.value)
})

const displayedItems = computed(() => {
  return filteredItems.value.slice(0, visibleItems.value)
})

const hasMoreItems = computed(() => {
  return displayedItems.value.length < filteredItems.value.length
})

const setActiveCategory = (category) => {
  activeCategory.value = category
  visibleItems.value = props.itemsPerPage
}

const showMoreItems = () => {
  visibleItems.value += props.itemsPerPage
}

const getCategoryName = (categoryId) => {
  const category = props.galleryCategories.find(cat => cat.id === categoryId)
  return category ? category.name : ''
}

const openLightbox = (item) => {
  currentItem.value = item
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.galeria-section {
  background-color: var(--background-light);
}

.text-primary {
  color: var(--content-primary);
}

.gallery-filters {
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: white;
  color: var(--content-text);
  border: 1px solid #e5e7eb;
}

.filter-btn:hover {
  background-color: #f3f4f6;
}

.filter-btn.active {
  background-color: var(--content-primary);
  color: white;
  border-color: var(--content-primary);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.gallery-item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  transition: opacity 0.3s ease;
}

.gallery-item-category {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.gallery-item-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.show-more-btn {
  background-color: var(--content-primary);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.show-more-btn:hover {
  background-color: var(--content-secondary);
}

/* Lightbox styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .lightbox-content {
    flex-direction: row;
    max-height: 80vh;
  }
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

.lightbox-image {
  flex: 1;
  overflow: hidden;
}

.lightbox-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox-details {
  padding: 2rem;
  width: 100%;
}

@media (min-width: 768px) {
  .lightbox-details {
    width: 40%;
    max-width: 400px;
  }
}

.lightbox-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--content-secondary);
}

.lightbox-category {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  color: var(--content-primary);
}

.lightbox-description {
  color: var(--content-text);
  line-height: 1.6;
}
</style>
