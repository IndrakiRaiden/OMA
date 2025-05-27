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
    <section id="catalogo" class="catalog-section py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">NUESTRO CATÁLOGO</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos y soluciones de manufactura CNC, diseñados para satisfacer las necesidades de diversas industrias.
          </p>
        </div>
        
        <!-- Catalog grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Catalog items -->
          <div v-for="item in catalogItems" :key="item.id" class="catalog-card group">
            <!-- Item image -->
            <div class="card-image" :style="{ backgroundImage: `url(${item.image})` }">
              <div class="image-overlay"></div>
              <div class="icon-wrapper">
                <i :class="['fas', item.icon]"></i>
              </div>
            </div>
            
            <!-- Item content -->
            <div class="card-content">
              <h3 class="title">{{ item.title }}</h3>
              <p class="description">
                {{ item.description }}
              </p>
              
              <!-- Features list -->
              <div v-if="item.features.length > 0" class="features-list">
                <div v-for="(feature, index) in item.features" :key="index" 
                     class="feature-item"
                     :style="{ animationDelay: `${index * 100}ms` }">
                  <div class="feature-icon">
                    <i class="fas fa-check"></i>
                  </div>
                  <span>{{ feature }}</span>
                </div>
              </div>

              <!-- Button to view details -->
              <button @click="openItemDetail(item)" class="learn-more group">
                <span class="btn-text">Más Información</span>
                <span class="btn-icon">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FeaturesSection :features="features" />
    <CTASection />
    
    <!-- Item Detail Modal -->
    <div v-if="selectedItem && showModal" class="catalog-detail-modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-container">
        <button class="modal-close-btn" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        
        <!-- Modal Content -->
        <div class="modal-content">
          <!-- Item Hero -->
          <div class="modal-hero" :style="{ backgroundImage: `url(${selectedItem.image})` }">
            <div class="hero-overlay"></div>
            <div class="hero-content">
              <div class="item-icon">
                <i :class="['fas', selectedItem.icon]"></i>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">
                {{ selectedItem.title }}
              </h2>
            </div>
          </div>
          
          <!-- Item Details -->
          <div class="modal-body">
            <div class="item-description">
              <h3 class="text-2xl font-bold mb-4">Descripción del Producto</h3>
              
              <div class="rich-text-content mb-6">
                <p class="text-lg text-gray-700 leading-relaxed mb-4">
                  {{ selectedItem.fullDescription }}
                </p>
                
                <!-- Features list -->
                <div v-if="selectedItem.features.length > 0" class="mt-6">
                  <h4 class="text-xl font-semibold mb-3">Características</h4>
                  <ul class="features-list grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li v-for="(feature, index) in selectedItem.features" :key="index" class="flex items-start">
                      <div class="feature-icon mr-3 mt-1">
                        <i class="fas fa-check-circle"></i>
                      </div>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Specifications -->
                <div v-if="selectedItem.specifications.length > 0" class="mt-6">
                  <h4 class="text-xl font-semibold mb-3">Especificaciones</h4>
                  <div class="specifications-table">
                    <div v-for="(spec, index) in selectedItem.specifications" :key="index" class="spec-row">
                      <div class="spec-name">{{ spec.name }}</div>
                      <div class="spec-value">{{ spec.value }}</div>
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
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

// Reactive state
const catalogItems = ref([
  {
    id: 1,
    title: 'Piezas Mecanizadas CNC',
    description: 'Piezas de alta precisión fabricadas con tecnología CNC para diversas aplicaciones industriales.',
    fullDescription: 'Nuestras piezas mecanizadas CNC son fabricadas con la más alta precisión y calidad, utilizando materiales de primera clase y tecnología de vanguardia. Cada pieza es sometida a rigurosos controles de calidad para garantizar su rendimiento y durabilidad en las aplicaciones más exigentes.',
    image: '/img/products/product-1.jpg',
    icon: 'fa-cogs',
    features: [
      'Alta precisión dimensional',
      'Excelente acabado superficial',
      'Materiales de alta calidad',
      'Tolerancias exactas'
    ],
    specifications: [
      { name: 'Materiales', value: 'Aluminio, Acero, Titanio, Plásticos de ingeniería' },
      { name: 'Tolerancias', value: 'Hasta ±0.01mm' },
      { name: 'Acabados', value: 'Pulido, Anodizado, Galvanizado' },
      { name: 'Tamaños', value: 'Desde 5mm hasta 500mm' }
    ]
  },
  {
    id: 2,
    title: 'Componentes Aeroespaciales',
    description: 'Componentes de precisión para la industria aeroespacial, cumpliendo con los estándares más exigentes.',
    fullDescription: 'Nuestros componentes aeroespaciales están diseñados y fabricados para cumplir con los estándares más rigurosos de la industria. Utilizamos materiales certificados y procesos de fabricación avanzados para garantizar la máxima fiabilidad y rendimiento en condiciones extremas.',
    image: '/img/products/product-2.jpg',
    icon: 'fa-plane',
    features: [
      'Certificación AS9100',
      'Trazabilidad completa',
      'Materiales aeroespaciales certificados',
      'Pruebas no destructivas'
    ],
    specifications: [
      { name: 'Materiales', value: 'Aleaciones de aluminio aeroespacial, Titanio, Inconel' },
      { name: 'Certificaciones', value: 'AS9100, ISO 9001' },
      { name: 'Procesos', value: 'Mecanizado CNC, EDM, Tratamiento térmico' },
      { name: 'Inspección', value: 'CMM, Rayos X, Ultrasonido' }
    ]
  },
  {
    id: 3,
    title: 'Moldes y Matrices',
    description: 'Moldes y matrices de alta precisión para procesos de inyección y estampado.',
    fullDescription: 'Diseñamos y fabricamos moldes y matrices de alta precisión para procesos de inyección de plástico, fundición y estampado de metal. Nuestros moldes están optimizados para maximizar la eficiencia de producción y la calidad de las piezas finales, reduciendo los costos de operación.',
    image: '/img/products/product-3.jpg',
    icon: 'fa-cube',
    features: [
      'Diseño optimizado para producción',
      'Alta durabilidad',
      'Sistemas de refrigeración eficientes',
      'Acabados de precisión'
    ],
    specifications: [
      { name: 'Materiales', value: 'Aceros para moldes P20, H13, 420SS' },
      { name: 'Capacidad', value: 'Hasta 1000mm x 800mm x 600mm' },
      { name: 'Vida útil', value: '500,000+ ciclos' },
      { name: 'Tecnologías', value: 'Canales conformados, Insertos intercambiables' }
    ]
  },
  {
    id: 4,
    title: 'Prototipos Funcionales',
    description: 'Prototipos rápidos y funcionales para validación de diseño y pruebas de concepto.',
    fullDescription: 'Ofrecemos servicios de prototipado rápido para ayudar a nuestros clientes a validar sus diseños antes de la producción en serie. Nuestros prototipos funcionales permiten realizar pruebas reales en condiciones de uso, identificar mejoras potenciales y optimizar el diseño para la fabricación.',
    image: '/img/products/product-4.jpg',
    icon: 'fa-lightbulb',
    features: [
      'Tiempos de entrega rápidos',
      'Múltiples iteraciones',
      'Materiales de producción final',
      'Asesoría en diseño para manufactura'
    ],
    specifications: [
      { name: 'Plazos', value: 'Desde 3 días hábiles' },
      { name: 'Materiales', value: 'Plásticos, Metales, Compuestos' },
      { name: 'Procesos', value: 'CNC, Impresión 3D, Mecanizado' },
      { name: 'Acabados', value: 'Funcionales y estéticos' }
    ]
  },
  {
    id: 5,
    title: 'Componentes Médicos',
    description: 'Dispositivos y componentes médicos de alta precisión fabricados en ambientes controlados.',
    fullDescription: 'Fabricamos componentes y dispositivos médicos de alta precisión en ambientes controlados, cumpliendo con las normativas más estrictas del sector. Nuestros productos médicos se utilizan en implantes, instrumentación quirúrgica y equipos de diagnóstico, garantizando la máxima calidad y seguridad para los pacientes.',
    image: '/img/products/product-5.jpg',
    icon: 'fa-heartbeat',
    features: [
      'Certificación ISO 13485',
      'Salas limpias clase 10,000',
      'Materiales biocompatibles',
      'Trazabilidad completa'
    ],
    specifications: [
      { name: 'Materiales', value: 'Titanio médico, Acero inoxidable 316L, PEEK' },
      { name: 'Certificaciones', value: 'ISO 13485, FDA' },
      { name: 'Procesos', value: 'Mecanizado CNC, Electroerosión, Pulido' },
      { name: 'Aplicaciones', value: 'Implantes, Instrumentación, Diagnóstico' }
    ]
  },
  {
    id: 6,
    title: 'Sistemas Automatizados',
    description: 'Sistemas y equipos automatizados personalizados para optimizar procesos industriales.',
    fullDescription: 'Diseñamos y fabricamos sistemas automatizados a medida para optimizar los procesos industriales de nuestros clientes. Nuestras soluciones integran mecánica de precisión, electrónica y software para crear equipos eficientes y fiables que aumentan la productividad y reducen los costos operativos.',
    image: '/img/products/product-6.jpg',
    icon: 'fa-robot',
    features: [
      'Diseño personalizado',
      'Integración con sistemas existentes',
      'Interfaz de usuario intuitiva',
      'Mantenimiento remoto'
    ],
    specifications: [
      { name: 'Controladores', value: 'PLC, Microcontroladores, PC Industrial' },
      { name: 'Comunicación', value: 'Ethernet/IP, Profinet, Modbus' },
      { name: 'HMI', value: 'Pantallas táctiles, Aplicaciones móviles' },
      { name: 'Soporte', value: 'Mantenimiento preventivo, Actualizaciones remotas' }
    ]
  }
]);

// Features section data
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
};

const closeModal = () => {
  showModal.value = false;
  // Re-enable body scrolling
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  // Any initialization code can go here
});
</script>

<style scoped>
.catalog-page {
  /* Using site's color variables */
}

/* Banner styling is handled by the BannerV2 component */

/* Catalog Section */
.catalog-section {
  background-color: #f9f9f9;
}

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
}

.btn-text {
  margin-right: 0.5rem;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.learn-more:hover {
  color: var(--content-secondary);
}

.learn-more:hover .btn-icon {
  transform: translateX(5px);
}

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
