<template>
  <section id="galeria" class="galeria-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        <span class="text-gray-800">{{ titlePrefix }}</span>&nbsp;
        <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      
      <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        {{ description }}
      </p>
      
      <div class="gallery-filters mb-8 flex flex-wrap justify-center gap-4">
        <button 
          v-for="category in galleryCategories" 
          :key="category.id"
          class="filter-btn px-4 py-2 rounded-full"
          :class="{ 'active': activeCategory === category.id }"
          @click="setActiveCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div class="gallery-grid">
        <div 
          v-for="(item, index) in filteredGalleryItems" 
          :key="index"
          class="gallery-item"
          v-show="index < visibleCount"
          @click="openLightbox(index)"
        >
          <div class="gallery-item-inner">
            <img 
              :src="item.imageUrl || 'https://source.unsplash.com/featured/600x400?industrial'" 
              :alt="item.title"
              class="gallery-img"
            />
            <div class="gallery-overlay">
              <h3 class="gallery-title">{{ item.title }}</h3>
              <p class="gallery-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="hasMoreToShow" class="text-center mt-10">
        <button 
          class="show-more-btn px-6 py-3 rounded-full"
          @click="showMore"
        >
          {{ showMoreButtonText }}
        </button>
      </div>
      
      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="lightbox-image-container">
            <img 
              :src="currentLightboxItem.imageUrl || 'https://source.unsplash.com/featured/800x600?industrial'" 
              :alt="currentLightboxItem.title"
              class="lightbox-image"
            />
          </div>
          
          <div class="lightbox-details">
            <h3 class="lightbox-title">{{ currentLightboxItem.title }}</h3>
            <p class="lightbox-description">{{ currentLightboxItem.description }}</p>
          </div>
          
          <div class="lightbox-nav">
            <button 
              class="lightbox-nav-btn prev" 
              @click.stop="prevLightboxItem"
              v-if="lightboxIndex > 0"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              class="lightbox-nav-btn next" 
              @click.stop="nextLightboxItem"
              v-if="lightboxIndex < filteredGalleryItems.length - 1"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
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
    default: 'Explore nuestra galería de proyectos y soluciones para la industria.'
  },
  showMoreButtonText: {
    type: String,
    default: 'Mostrar Más'
  },
  galleryItems: {
    type: Array,
    default: () => []
  },
  galleryCategories: {
    type: Array,
    default: () => [{ id: 'all', name: 'Todos' }]
  },
  initialVisibleCount: {
    type: Number,
    default: 6
  }
})

// State
const activeCategory = ref('all')
const visibleCount = ref(props.initialVisibleCount)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

// Computed
const filteredGalleryItems = computed(() => {
  if (activeCategory.value === 'all') {
    return props.galleryItems
  }
  return props.galleryItems.filter(item => item.category === activeCategory.value)
})

const hasMoreToShow = computed(() => {
  return visibleCount.value < filteredGalleryItems.value.length
})

const currentLightboxItem = computed(() => {
  return filteredGalleryItems.value[lightboxIndex.value] || {}
})

// Methods
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
  visibleCount.value = props.initialVisibleCount
}

const showMore = () => {
  visibleCount.value += props.initialVisibleCount
}

const openLightbox = (index) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  // Restore body scroll
  document.body.style.overflow = ''
}

const nextLightboxItem = () => {
  if (lightboxIndex.value < filteredGalleryItems.value.length - 1) {
    lightboxIndex.value++
  }
}

const prevLightboxItem = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--
  }
}
</script>

<style scoped>
.galeria-section {
  background-color: var(--content-white);
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

.gallery-filters {
  margin-bottom: 2rem;
}

.filter-btn {
  background-color: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--content-primary);
  color: white;
  border-color: var(--content-primary);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.gallery-item-inner {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%);
  padding: 1.5rem;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.gallery-description {
  font-size: 0.875rem;
  opacity: 0.9;
}

.show-more-btn {
  background-color: var(--content-primary);
  color: white;
  border: none;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.show-more-btn:hover {
  background-color: var(--content-accent);
}

/* Lightbox Styles */
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
}

.lightbox-content {
  position: relative;
  width: 90%;
  max-width: 1000px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lightbox-close:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.lightbox-image-container {
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
}

.lightbox-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.lightbox-details {
  padding: 1.5rem;
  background-color: white;
}

.lightbox-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.lightbox-description {
  color: #4b5563;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
}

.lightbox-nav-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lightbox-nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .lightbox-content {
    width: 95%;
  }
  
  .lightbox-nav-btn {
    width: 32px;
    height: 32px;
  }
}
</style>
