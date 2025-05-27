<template>
  <main class="catalog-page">
    <BannerV2 
      title="Catálogo de Productos" 
      subtitle="Explora nuestra selección de productos y soluciones de alta precisión"
      :buttons="[
        { text: 'Ver Catálogo', href: '#catalogo', class: 'primary-btn' },
        { text: 'Cotizar', href: '/cotiza', class: 'secondary-btn' }
      ]"
    />
    
    <!-- Catalog Section -->
    <section id="catalogo" class="catalog-section py-16 overflow-x-hidden">
      <div class="container mx-auto px-4 xl:px-6 2xl:px-8 max-w-screen-2xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">NUESTRO CATÁLOGO</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos y soluciones de manufactura CNC, diseñados para satisfacer las necesidades de diversas industrias.
          </p>
        </div>
        
        <!-- Category filter -->
        <div class="mb-8">
          <div class="flex flex-wrap justify-center gap-3 mb-4">
            <button 
              @click="selectedCategory = ''"
              :class="['category-btn', !selectedCategory ? 'active' : '']"
            >
              Todos
            </button>
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              :class="['category-btn', selectedCategory === category ? 'active' : '']"
            >
              {{ category }}
            </button>
          </div>
        </div>
        
        <!-- Catalog grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
          <!-- Catalog items using component -->
          <CatalogItem 
            v-for="item in filteredItems" 
            :key="item['Item #']" 
            :item="item"
            @view-details="openItemDetail"
          />
        </div>
      </div>
    </section>

    <FeaturesSection :features="features" />
    <CTASection />
    
    <!-- Item Detail Modal using component -->
    <CatalogItemDetail 
      :item="selectedItem" 
      :show="showModal"
      @close="closeModal"
    />
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import catalogData from '~/assets/data/catalog.json';

definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

// Reactive state
const catalogItems = ref([]);
const selectedCategory = ref('');

// Compute unique categories from catalog data
const categories = computed(() => {
  const uniqueCategories = new Set();
  catalogItems.value.forEach(item => {
    if (item.Category && item.Category.trim() !== '') {
      uniqueCategories.add(item.Category);
    }
  });
  return Array.from(uniqueCategories).sort();
});

// Filter items by selected category
const filteredItems = computed(() => {
  if (!selectedCategory.value) {
    return catalogItems.value.filter(item => item.Category && item.Category.trim() !== '');
  }
  return catalogItems.value.filter(item => item.Category === selectedCategory.value);
});

const features = ref([
  {
    id: 1,
    title: 'Calidad Garantizada',
    description: 'Todos nuestros productos cumplen con los más altos estándares de calidad',
    icon: 'fa-award'
  },
  {
    id: 2,
    title: 'Personalización Total',
    description: 'Adaptamos nuestros productos a tus necesidades específicas',
    icon: 'fa-sliders-h'
  },
  {
    id: 3,
    title: 'Soporte Técnico',
    description: 'Equipo de expertos disponible para asesorarte',
    icon: 'fa-headset'
  },
  {
    id: 4,
    title: 'Entrega Puntual',
    description: 'Cumplimos con los plazos de entrega acordados',
    icon: 'fa-shipping-fast'
  }
]);

// Modal state
const showModal = ref(false);
const selectedItem = ref(null);

// Modal functions
const openItemDetail = (item) => {
  selectedItem.value = item;
  showModal.value = true;
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
  // Save scroll position
  document.body.dataset.scrollY = window.scrollY;
};

const closeModal = () => {
  showModal.value = false;
  // Re-enable body scrolling
  document.body.style.overflow = 'auto';
  // Restore scroll position
  if (document.body.dataset.scrollY) {
    window.scrollTo(0, parseInt(document.body.dataset.scrollY || '0'));
  }
};

onMounted(() => {
  // Load catalog data from JSON file
  catalogItems.value = catalogData.filter(item => item.Category && item.Category.trim() !== '');
  
  // Handle hash navigation
  if (window.location.hash === '#catalogo') {
    setTimeout(() => {
      const catalogSection = document.getElementById('catalogo');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }
});
</script>

<style scoped>
.catalog-page {
  /* Using site's color variables */
  overflow-x: hidden;
  width: 100%;
}

/* Banner styling is handled by the BannerV2 component */

/* Catalog Section */
.catalog-section {
  background-color: #f9f9f9;
}

/* Category filter buttons */
.category-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #333;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  white-space: nowrap;
}

@media (min-width: 1280px) {
  .category-btn {
    padding: 0.5rem 1.25rem;
  }
}

.category-btn:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.category-btn.active {
  background-color: var(--content-primary, #0056b3);
  color: white;
  border-color: var(--content-primary, #0056b3);
}
</style>