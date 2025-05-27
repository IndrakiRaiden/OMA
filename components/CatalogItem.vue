<template>
  <div class="catalog-card group">
    <!-- Item image -->
    <div class="card-image" :style="{ backgroundImage: `url(/img/products/default-product.jpg)` }">
      <div class="image-overlay"></div>
      <div class="icon-wrapper">
        <i class="fas fa-cogs"></i>
      </div>
    </div>
    
    <!-- Item content -->
    <div class="card-content">
      <h3 class="title">{{ item['Product Name'] }}</h3>
      <p class="description">
        {{ item.Category }}
      </p>
      
      <!-- Features list -->
      <div class="features-list">
        <div class="feature-item" :style="{ animationDelay: '0ms' }">
          <div class="feature-icon">
            <i class="fas fa-check"></i>
          </div>
          <span>Material: {{ item.Material }}</span>
        </div>
        <div v-if="item['Additional Info']" class="feature-item" :style="{ animationDelay: '100ms' }">
          <div class="feature-icon">
            <i class="fas fa-check"></i>
          </div>
          <span>{{ item['Additional Info'] }}</span>
        </div>
      </div>

      <!-- Button to view details -->
      <button @click="$emit('view-details', item)" class="learn-more group">
        <span class="btn-text">Más Información</span>
        <span class="btn-icon">
          <i class="fas fa-arrow-right"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

// Define emits
defineEmits(['view-details']);
</script>

<style scoped>
/* Catalog Card */
.catalog-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.catalog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  transition: all 0.4s ease;
}

.catalog-card:hover .card-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
  transition: all 0.3s ease;
}

.catalog-card:hover .image-overlay {
  background: linear-gradient(to bottom, rgba(var(--primary-rgb), 0.6) 0%, rgba(var(--primary-rgb), 0.8) 100%);
}

.icon-wrapper {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.catalog-card:hover .icon-wrapper {
  background-color: var(--content-secondary);
  transform: scale(1.1);
}

.card-content {
  padding: 1.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.catalog-card:hover .title {
  color: var(--content-primary);
}

.description {
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

/* Features list */
.features-list {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.feature-icon {
  width: 22px;
  height: 22px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.625rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

/* Learn more button */
.learn-more {
  margin-top: auto;
  background: none;
  border: none;
  color: var(--content-primary);
  font-weight: 600;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  border-radius: 4px;
  border: 1px solid transparent;
}

.learn-more:hover {
  background-color: rgba(var(--content-primary-rgb), 0.05);
  border-color: rgba(var(--content-primary-rgb), 0.2);
  color: var(--content-secondary);
}

.btn-text {
  margin-right: 0.5rem;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.learn-more:hover .btn-icon {
  transform: translateX(5px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
