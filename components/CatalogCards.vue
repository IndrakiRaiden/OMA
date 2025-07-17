<template>
  <div class="catalog-container">
    <div class="category-cards">
      <div 
        v-for="section in sectionNames" 
        :key="section.id" 
        class="category-card"
        :class="{ 'active': expandedSection === section.id }"
        @click="toggleSection(section.id)"
      >
        <div class="category-header">
          <h3>{{ section.name }}</h3>
          <span class="toggle-icon">{{ expandedSection === section.id ? '−' : '+' }}</span>
        </div>
        <transition name="expand">
          <div v-if="expandedSection === section.id" class="product-list">
            <div v-for="product in getProductsBySection(section.id)" :key="product['Item #']" class="product-item">
              <h4>{{ product['Product Name'] }}</h4>
              <div class="product-details">
                <p><strong>Item #:</strong> {{ product['Item #'] }}</p>
                <p><strong>Material:</strong> {{ product['Material'] }}</p>
                <p><strong>Additional Info:</strong> {{ product['Additional Info'] }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { sectionNames } from '~/assets/data/catalog-sections';
import section1 from '~/assets/data/catalog-sections/section1-rollers.json';
import section2 from '~/assets/data/catalog-sections/section2-pins-bushings.json';
import section3 from '~/assets/data/catalog-sections/section3-sprockets-gears.json';
import section4 from '~/assets/data/catalog-sections/section4-hydraulic-cylinders.json';
import section5 from '~/assets/data/catalog-sections/section5-pneumatic-cylinders.json';
import section6 from '~/assets/data/catalog-sections/section6-bearings-mold-nozzles-springs.json';

export default {
  data() {
    return {
      expandedSection: null,
      sectionNames: sectionNames,
      sections: {
        'rollers': section1,
        'pins-bushings': section2,
        'sprockets-gears': section3,
        'hydraulic-cylinders': section4,
        'pneumatic-cylinders': section5,
        'bearings-mold-nozzles-springs': section6
      }
    }
  },
  methods: {
    toggleSection(sectionId) {
      if (this.expandedSection === sectionId) {
        this.expandedSection = null;
      } else {
        this.expandedSection = sectionId;
      }
    },
    getProductsBySection(sectionId) {
      return this.sections[sectionId] || [];
    }
  }
}
</script>

<style scoped>
.catalog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.category-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #fff;
}

.category-card.active {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.category-card:hover .category-header {
  background-color: #f0f0f0;
}

.category-card.active .category-header {
  background-color: #e8e8e8;
}

.toggle-icon {
  font-size: 24px;
  font-weight: bold;
}

.product-list {
  padding: 0 20px;
}

.product-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}

.product-item:last-child {
  border-bottom: none;
}

.product-details {
  color: #666;
  font-size: 0.9rem;
}

/* Transition effects */
.expand-enter-active, .expand-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
  max-height: 1000px;
  overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
