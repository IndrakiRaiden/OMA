<template>
  <section class="gallery-section py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        Galería de <span class="text-primary">Mecanizado CNC</span>
      </h2>
      <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Explora algunos de nuestros proyectos más destacados en mecanizado CNC de precisión.
      </p>

      <!-- Filter Categories -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button 
          class="filter-btn" 
          :class="{ 'active': activeFilter === 'todos' }"
          @click="setFilter('todos')">
          Todos
        </button>
        <button 
          v-for="category in categories" 
          :key="category" 
          class="filter-btn" 
          :class="{ 'active': activeFilter === category }"
          @click="setFilter(category)">
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="index" 
          class="gallery-item"
          :class="{ 'fade-in': true }"
          :style="{ animationDelay: `${index * 100}ms` }"
          @click="openLightbox(item)">
          <div class="aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />
            <div class="overlay flex items-center justify-center">
              <span class="view-project">
                <i class="fas fa-search-plus mr-2"></i>Ver detalles
              </span>
            </div>
          </div>
          <div class="p-6 bg-white rounded-b-lg">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-lg">{{ item.title }}</h3>
              <span class="category-badge">{{ item.category }}</span>
            </div>
            <p class="text-gray-600 mb-3">{{ item.description }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-cog mr-2"></i>
              <span>{{ item.specs }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredItems.length === 0" class="text-center py-16">
        <i class="fas fa-search text-5xl text-gray-300 mb-4"></i>
        <p class="text-xl text-gray-500">No se encontraron proyectos en esta categoría</p>
        <button @click="setFilter('todos')" class="mt-4 text-primary hover:underline">
          Ver todos los proyectos
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightbox.open" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="close-btn" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        <div class="lightbox-image-container">
          <img :src="lightbox.item.image" :alt="lightbox.item.title" class="lightbox-image">
        </div>
        <div class="lightbox-details">
          <h3 class="lightbox-title">{{ lightbox.item.title }}</h3>
          <span class="lightbox-category">{{ lightbox.item.category }}</span>
          <p class="lightbox-description">{{ lightbox.item.description }}</p>
          
          <div class="lightbox-info-grid">
            <div class="lightbox-info-item">
              <h4><i class="fas fa-cog mr-2"></i>Especificaciones</h4>
              <p>{{ lightbox.item.specs }}</p>
            </div>
            
            <div class="lightbox-info-item" v-if="lightbox.item.materials">
              <h4><i class="fas fa-cube mr-2"></i>Material</h4>
              <p>{{ lightbox.item.materials }}</p>
            </div>
            
            <div class="lightbox-info-item" v-if="lightbox.item.process">
              <h4><i class="fas fa-tools mr-2"></i>Proceso</h4>
              <p>{{ lightbox.item.process }}</p>
            </div>
            
            <div class="lightbox-info-item" v-if="lightbox.item.tolerance">
              <h4><i class="fas fa-ruler-combined mr-2"></i>Tolerancia</h4>
              <p>{{ lightbox.item.tolerance }}</p>
            </div>
            
            <div class="lightbox-info-item" v-if="lightbox.item.finish">
              <h4><i class="fas fa-brush mr-2"></i>Acabado</h4>
              <p>{{ lightbox.item.finish }}</p>
            </div>
          </div>
          
          <div class="lightbox-footer" v-if="lightbox.item.client">
            <p class="client-info">
              <i class="fas fa-building mr-2"></i>
              Cliente: <span>{{ lightbox.item.client }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GaleriaMecanizado',
  data() {
    return {
      activeFilter: 'todos',
      lightbox: {
        open: false,
        item: null
      },
      galleryItems: [
        {
          title: 'Componentes de Precisión',
          description: 'Mecanizado de alta precisión en aluminio para componentes críticos',
          specs: 'Tolerancia: ±0.01mm',
          category: 'Fresado 5 Ejes',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDA0N0FCIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwNDdBQiIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q29tcG9uZW50ZXMgZGUgUHJlY2lzacOzbjwvdGV4dD48L3N2Zz4=',
          materials: 'Aluminio 7075-T6',
          process: 'Fresado CNC de 5 ejes',
          tolerance: '±0.01mm en todas las dimensiones críticas',
          finish: 'Anodizado Tipo II',
          client: 'Sector Aeroespacial'
        },
        {
          title: 'Ejes Industriales',
          description: 'Serie de ejes de transmisión para maquinaria industrial',
          specs: 'Serie de 500 unidades',
          category: 'Torneado CNC',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDBDRUQxIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwQ0VEMSIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+RWplcyBJbmR1c3RyaWFsZXM8L3RleHQ+PC9zdmc+',
          materials: 'Acero inoxidable 316L',
          process: 'Torneado CNC con tratamiento térmico',
          tolerance: '±0.03mm en diámetros',
          finish: 'Pulido a espejo Ra 0.2',
          client: 'Industria Manufacturera'
        },
        {
          title: 'Moldes de Inyección',
          description: 'Fabricación de moldes para inyección de plásticos de alta precisión',
          specs: 'Dimensiones: 400x300x200mm',
          category: 'Electroerosión',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMUUzQThBIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzFFM0E4QSIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+TW9sZGVzIGRlIElueWVjY2nDs248L3RleHQ+PC9zdmc+',
          materials: 'Acero P20',
          process: 'Electroerosión y fresado CNC',
          tolerance: '±0.02mm en superficies de contacto',
          finish: 'Pulido técnico para moldes',
          client: 'Industria Automotriz'
        },
        {
          title: 'Prototipos Funcionales',
          description: 'Prototipado rápido para validación de diseño antes de producción',
          specs: 'Tiempo de entrega: 48h',
          category: 'Prototipado',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNDY4MkI0Ij48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzQ2ODJCNCIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+UHJvdG90aXBvcyBGdW5jaW9uYWxlczwvdGV4dD48L3N2Zz4=',
          materials: 'ABS de alta resistencia',
          process: 'Mecanizado CNC de alta velocidad',
          tolerance: '±0.05mm',
          finish: 'Acabado estándar',
          client: 'Desarrollo de Productos'
        },
        {
          title: 'Componentes Aeroespaciales',
          description: 'Mecanizado de titanio para componentes críticos certificados',
          specs: 'Certificación AS9100',
          category: 'Fresado 5 Ejes',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDA0N0FCIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwNDdBQiIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q29tcG9uZW50ZXMgQWVyb2VzcGFjaWFsZXM8L3RleHQ+PC9zdmc+',
          materials: 'Titanio Ti-6Al-4V',
          process: 'Fresado CNC de 5 ejes con control de calidad',
          tolerance: '±0.005mm en características críticas',
          finish: 'Tratamiento superficial especial',
          client: 'Industria Aeroespacial'
        },
        {
          title: 'Engranajes de Precisión',
          description: 'Fabricación de engranajes para transmisiones de alto rendimiento',
          specs: 'Módulo: 2.5',
          category: 'Engranajes',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNDE2OUUxIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzQxNjlFMSIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+RW5ncmFnYWVzIGRlIFByZWNpc288L3RleHQ+PC9zdmc+',
          materials: 'Acero 4140 templado',
          process: 'Fresado CNC y rectificado de precisión',
          tolerance: 'AGMA Clase 12',
          finish: 'Nitrurado',
          client: 'Industria de Maquinaria Pesada'
        },
        {
          title: 'Implantes Médicos',
          description: 'Fabricación de implantes personalizados con certificación médica',
          specs: 'Biocompatible según ISO 13485',
          category: 'Médico',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMUUzQThBIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzFFM0E4QSIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+SW1wbGFudGVzIE3DqWRpY29zPC90ZXh0Pjwvc3ZnPg==',
          materials: 'Titanio grado médico',
          process: 'Mecanizado CNC de ultra precisión',
          tolerance: '±0.008mm',
          finish: 'Electropulido médico',
          client: 'Sector Médico'
        },
        {
          title: 'Disipadores Térmicos',
          description: 'Disipadores de calor para equipos electrónicos de alta potencia',
          specs: 'Eficiencia térmica optimizada',
          category: 'Electrónica',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDBDRUQxIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwQ0VEMSIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+RGlzaXBhZG9yZXMgVMOpcm1pY29zPC90ZXh0Pjwvc3ZnPg==',
          materials: 'Aluminio 6061',
          process: 'Fresado CNC multieje',
          tolerance: '±0.05mm',
          finish: 'Anodizado negro',
          client: 'Industria Electrónica'
        },
        {
          title: 'Matrices Especiales',
          description: 'Diseño y fabricación de matrices para conformado de metal',
          specs: 'Dureza: 58-62 HRC',
          category: 'Matrices',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNDY4MkI0Ij48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzQ2ODJCNCIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+TWF0cmljZXMgRXNwZWNpYWxlczwvdGV4dD48L3N2Zz4=',
          materials: 'Acero D2',
          process: 'Mecanizado CNC y tratamiento térmico',
          tolerance: '±0.015mm',
          finish: 'Rectificado de precisión',
          client: 'Industria Metalúrgica'
        }
      ]
    }
  },
  computed: {
    categories() {
      // Extract unique categories from gallery items
      return [...new Set(this.galleryItems.map(item => item.category))];
    },
    filteredItems() {
      if (this.activeFilter === 'todos') {
        return this.galleryItems;
      }
      return this.galleryItems.filter(item => item.category === this.activeFilter);
    }
  },
  methods: {
    setFilter(category) {
      this.activeFilter = category;
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
  },
  mounted() {
    // No need to check for image existence since we're using placeholder service
    // The placeholder service will always return an image
  },
  beforeDestroy() {
    // Ensure body overflow is restored when component is destroyed
    document.body.classList.remove('overflow-hidden');
  }
}
</script>

<style scoped>
.gallery-section {
  background-color: var(--content-light);
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: 0;
  cursor: pointer;
}

.gallery-item.fade-in {
  animation: fadeInUp 0.6s ease forwards;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.aspect-w-4 {
  position: relative;
  padding-bottom: 75%; /* 4:3 Aspect Ratio */
}

.aspect-w-4 > * {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.view-project {
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.gallery-item:hover .view-project {
  transform: translateY(0);
  opacity: 1;
}

.gallery-item h3 {
  color: var(--content-primary);
  transition: color 0.3s ease;
}

.gallery-item:hover h3 {
  color: var(--content-secondary);
}

.category-badge {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 50px;
  background-color: var(--content-secondary-light);
  color: var(--content-secondary);
  font-weight: 500;
}

.filter-btn {
  padding: 8px 16px;
  border-radius: 50px;
  background-color: var(--content-light);
  color: var(--content-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.filter-btn:hover {
  background-color: var(--content-secondary);
  color: white;
}

.filter-btn.active {
  background-color: var(--content-primary);
  color: white;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: zoomIn 0.3s ease;
}

@media (min-width: 768px) {
  .lightbox-content {
    flex-direction: row;
    max-height: 80vh;
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.lightbox-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .lightbox-image-container {
    width: 60%;
    height: 100%;
  }
}

.lightbox-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox-details {
  padding: 30px;
  width: 100%;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .lightbox-details {
    width: 40%;
  }
}

.lightbox-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--content-primary);
  margin-bottom: 10px;
}

.lightbox-category {
  display: inline-block;
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 50px;
  background-color: var(--content-secondary-light);
  color: var(--content-secondary);
  margin-bottom: 20px;
}

.lightbox-description {
  font-size: 16px;
  color: var(--content-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.lightbox-info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

@media (min-width: 640px) {
  .lightbox-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.lightbox-info-item {
  background: var(--content-light);
  border-radius: 8px;
  padding: 12px;
}

.lightbox-info-item h4 {
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--content-secondary);
  font-size: 14px;
  display: flex;
  align-items: center;
}

.lightbox-info-item p {
  color: var(--content-secondary);
  line-height: 1.5;
  font-size: 14px;
}

.lightbox-footer {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.client-info {
  display: flex;
  align-items: center;
  color: var(--content-secondary);
  font-size: 14px;
}

.client-info span {
  font-weight: 500;
  color: var(--content-secondary);
  margin-left: 4px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
