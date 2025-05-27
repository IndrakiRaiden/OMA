<template>
  <div v-if="item && show" class="catalog-detail-modal">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal-container">
      <button class="modal-close-btn" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      
      <!-- Modal Content -->
      <div class="modal-content">
        <!-- Item Hero -->
        <div class="modal-hero" :style="{ backgroundImage: `url(/img/products/default-product.jpg)` }">
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="item-icon">
              <i class="fas fa-cogs"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              {{ item['Product Name'] }}
            </h2>
          </div>
        </div>
        
        <!-- Item Details -->
        <div class="modal-body">
          <div class="item-description">
            <h3 class="text-2xl font-bold mb-4">Información del Producto</h3>
            
            <div class="rich-text-content mb-6">
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                {{ item['Additional Info'] || 'Información no disponible' }}
              </p>
              
              <!-- Features list -->
              <div class="mt-6">
                <h4 class="text-xl font-semibold mb-3">Detalles</h4>
                <ul class="features-list grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li class="flex items-start">
                    <div class="feature-icon mr-3 mt-1">
                      <i class="fas fa-check-circle"></i>
                    </div>
                    <span>Categoría: {{ item.Category }}</span>
                  </li>
                  <li class="flex items-start">
                    <div class="feature-icon mr-3 mt-1">
                      <i class="fas fa-check-circle"></i>
                    </div>
                    <span>Material: {{ item.Material }}</span>
                  </li>
                  <li class="flex items-start">
                    <div class="feature-icon mr-3 mt-1">
                      <i class="fas fa-check-circle"></i>
                    </div>
                    <span>Número de Artículo: {{ item['Item #'] }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Specifications -->
              <div class="mt-6">
                <h4 class="text-xl font-semibold mb-3">Especificaciones</h4>
                <div class="specifications-table">
                  <div class="spec-row">
                    <div class="spec-name">Categoría</div>
                    <div class="spec-value">{{ item.Category }}</div>
                  </div>
                  <div class="spec-row">
                    <div class="spec-name">Material</div>
                    <div class="spec-value">{{ item.Material }}</div>
                  </div>
                  <div class="spec-row">
                    <div class="spec-name">Información Adicional</div>
                    <div class="spec-value">{{ item['Additional Info'] || 'N/A' }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="modal-cta">
            <NuxtLink to="/cotiza" class="cta-button">
              Solicitar Cotización
            </NuxtLink>
            <NuxtLink to="/contacto" class="cta-button-secondary">
              Contactar
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  item: {
    type: Object,
    default: null
  },
  show: {
    type: Boolean,
    default: false
  }
});

// Define emits
defineEmits(['close']);
</script>

<style scoped>
/* Modal Styles */
.catalog-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.modal-container {
  position: relative;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1001;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.3s ease;
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-close-btn:hover {
  background-color: var(--content-secondary);
  transform: scale(1.1);
}

.modal-content {
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: thin;
}

.modal-hero {
  height: 320px;
  background-size: cover;
  background-position: center;
  position: relative;
  animation: fadeIn 0.5s ease;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
}

.hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.item-icon {
  width: 80px;
  height: 80px;
  background-color: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.5s ease;
}

.modal-body {
  padding: 2rem;
}

.item-description {
  margin-bottom: 2rem;
}

.rich-text-content h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #333;
  position: relative;
  padding-bottom: 0.75rem;
}

.rich-text-content h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--content-primary);
}

.rich-text-content p {
  margin-bottom: 1.25rem;
  line-height: 1.8;
  font-size: 1.05rem;
  color: #444;
}

/* Specifications table */
.specifications-table {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.spec-row {
  display: flex;
  border-bottom: 1px solid #eee;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-name {
  width: 40%;
  padding: 0.75rem 1rem;
  background-color: #f5f5f5;
  font-weight: 600;
  color: #333;
}

.spec-value {
  width: 60%;
  padding: 0.75rem 1rem;
}

/* CTA Section */
.modal-cta {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.cta-button {
  flex: 1;
  display: inline-block;
  background-color: var(--content-primary);
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button:hover {
  background-color: var(--content-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.cta-button-secondary {
  flex: 1;
  display: inline-block;
  background-color: white;
  color: var(--content-primary);
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  border-radius: 4px;
  text-align: center;
  border: 2px solid var(--content-primary);
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button-secondary:hover {
  background-color: #f0f7ff;
  color: var(--content-secondary);
  border-color: var(--content-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}
</style>
