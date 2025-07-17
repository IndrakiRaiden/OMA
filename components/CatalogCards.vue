<template>
  <div class="catalog-container">
    <!-- Category Grid -->
    <div class="category-grid" ref="categoryGrid">
      <div 
        v-for="(section, index) in sectionNames" 
        :key="section.id" 
        class="category-card"
        :class="{ 'active': selectedSection === section.id }"
        @click="selectSection(section.id)"
        :style="{ '--category-color': categoryColors[index] }"
      >
        <div class="card-content">
          <div class="card-icon" v-html="icons[section.id]"></div>
          <h3>{{ section.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Product List for Selected Category -->
    <transition name="fade">
      <div v-if="selectedSection" class="product-list-container">
        <h3 class="product-list-title">Products in {{ selectedCategoryName }}</h3>
        <div class="product-list">
          <div v-for="product in getProductsBySection(selectedSection)" :key="product['Item #']" class="product-item">
            <div class="product-info">
              <h4>{{ product['Product Name'] }}</h4>
              <div class="product-details">
                <p><strong>Item #:</strong> {{ product['Item #'] }}</p>
                <p><strong>Material:</strong> {{ product['Material'] }}</p>
                <p><strong>Additional Info:</strong> {{ product['Additional Info'] }}</p>
              </div>
            </div>
            <div class="product-actions">
              <input 
                type="number" 
                min="1" 
                v-model.number="productQuantities[product['Item #']]" 
                class="quantity-input"
                placeholder="1"
              >
              <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { useCart } from '~/composables/useCart';
import { sectionNames } from '~/assets/data/catalog-sections';
import section1 from '~/assets/data/catalog-sections/section1-rollers.json';
import section2 from '~/assets/data/catalog-sections/section2-pins-bushings.json';
import section3 from '~/assets/data/catalog-sections/section3-sprockets-gears.json';
import section4 from '~/assets/data/catalog-sections/section4-hydraulic-cylinders.json';
import section5 from '~/assets/data/catalog-sections/section5-pneumatic-cylinders.json';
import section6 from '~/assets/data/catalog-sections/section6-bearings-mold-nozzles-springs.json';

const { addItem } = useCart();
const selectedSection = ref(null);
const productQuantities = ref({});

const sections = {
  'rollers': section1,
  'pins-bushings': section2,
  'sprockets-gears': section3,
  'hydraulic-cylinders': section4,
  'pneumatic-cylinders': section5,
  'bearings-mold-nozzles-springs': section6
};

const selectSection = (sectionId) => {
  if (selectedSection.value === sectionId) {
    selectedSection.value = null; // Allow deselecting
  } else {
    selectedSection.value = sectionId;
  }
  
  // Set animation order for category cards
  nextTick(() => {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
      card.style.setProperty('--order', index);
    });
  });
};

const selectedCategoryName = computed(() => {
  if (!selectedSection.value) return '';
  const section = sectionNames.find(s => s.id === selectedSection.value);
  return section ? section.name : '';
});

// Simple color palette for category indicators
const categoryColors = [
  'var(--content-primary)',
  'var(--content-secondary)',
  'var(--content-accent)',
  'var(--content-primary)',
  'var(--content-secondary)',
  'var(--content-accent)'
];

const icons = {
  'rollers': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>`,
  'pins-bushings': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>`,
  'sprockets-gears': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1H15a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  'hydraulic-cylinders': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4.5"></path><path d="M8 18v-4.5"></path><path d="M8 12V2"></path><path d="M16 18v-4.5"></path><path d="M16 12V2"></path><path d="M12 18V9"></path><path d="M12 5V2"></path></svg>`,
  'pneumatic-cylinders': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M12 19l-7-7-3 3 7 7 3-3z"></path><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M12 19l-7-7-3 3 7 7 3-3z"></path></svg>`,
  'bearings-mold-nozzles-springs': `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="M8 17l4 4 4-4"></path></svg>`
};

const getProductsBySection = (sectionId) => {
  return sections[sectionId] || [];
};

const addToCart = (product) => {
  const quantity = productQuantities.value[product['Item #']] || 1;
  addItem(product, quantity);
  productQuantities.value[product['Item #']] = 1; // Reset quantity
};
</script>

<style scoped>
.catalog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  animation: category-grid-appear 0.6s ease forwards;
}

.category-card {
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: var(--color-light);
  color: var(--content-dark);
  position: relative;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02);
  border: none;
  opacity: 0;
  transform: translateY(10px);
  animation: category-card-appear 0.4s ease-out forwards;
  animation-delay: calc(var(--order, 0) * 0.08s);
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(var(--primary-rgb), 0.2);
}

.category-card.active {
  transform: none;
  box-shadow: 0 0 0 2px var(--content-primary), 0 2px 8px rgba(0, 0, 0, 0.04);
  background-color: rgba(var(--primary-rgb), 0.03);
}

.card-content {
  text-align: center;
  z-index: 1;
}

.card-icon {
  margin-bottom: 15px;
  color: var(--content-primary);
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.card-icon svg {
  stroke-width: 1.8;
  width: 32px;
  height: 32px;
  opacity: 0.9;
}

.category-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  position: relative;
}

.category-card h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background-color: var(--category-color);
  border-radius: 1px;
  opacity: 0.8;
}

.product-list-container {
  background-color: var(--color-light);
  border-radius: 12px;
  padding: 28px 25px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02);
  margin-top: 24px;
  border: none;
  opacity: 0;
  transform: translateY(10px);
  animation: product-list-appear 0.4s ease-out forwards;
}

.product-list-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
  color: var(--content-dark);
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding: 15px 0;
  gap: 20px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.product-item:hover {
  background-color: rgba(0, 0, 0, 0.01);
}

.product-item:hover .product-actions {
  opacity: 1;
  transform: translateX(0);
}

.product-item:last-child {
  border-bottom: none;
}

.product-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--content-dark);
  letter-spacing: -0.02em;
  margin-bottom: 5px;
}

.product-details {
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
}

.quantity-input {
  width: 50px;
  padding: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
  transition: all 0.2s ease;
}

.quantity-input:focus {
  border-color: var(--content-primary);
  outline: none;
}

.add-to-cart-btn {
  padding: 8px 12px;
  background-color: var(--content-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.add-to-cart-btn:hover {
  background-color: var(--content-secondary);
}

/* Transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Animation for category grid appearance */
@keyframes category-grid-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation for category cards appearance */
@keyframes category-card-appear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  60% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation for product list appearance */
@keyframes product-list-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
