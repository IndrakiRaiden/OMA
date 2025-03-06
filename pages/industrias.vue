<template>
  <div>
    <main class="industries-page">
      <BannerV2 
        title="Industrias" 
        subtitle="Soluciones especializadas para diferentes sectores"
        :buttons="[
          { text: 'Ver Industrias', href: '#industrias', class: 'primary-btn' },
          { text: 'Contáctanos', href: './contact', class: 'secondary-btn' }
        ]"
      />
      <div id="industrias" class="industries-content py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-4">
            Nuestras <span class="text-primary">Especialidades</span>
          </h2>
          <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados en manufactura y tecnología CNC, 
            adaptados a las necesidades específicas de cada industria.
          </p>
          <div class="industries-grid">
            <NuxtLink 
              v-for="(industry, index) in industries" 
              :key="index"
              :to="industry.path"
              class="industry-card"
            >
              <div class="card-content">
                <div class="industry-image">
                  <img :src="industry.imageUrl" :alt="industry.name" class="industry-img" />
                  <div class="image-overlay">
                    <div class="icon-container">
                      <i :class="['fas', industry.icon]"></i>
                    </div>
                    <div class="industry-label">{{ industry.name }}</div>
                  </div>
                </div>
                <div class="card-body">
                  <h3>{{ industry.name }}</h3>
                  <p>{{ industry.description }}</p>
                  <div class="learn-more-wrapper">
                    <span class="learn-more">
                      Ver más <i class="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BannerV2 from '../components/BannerV2.vue'

export default {
  name: 'IndustriasPage',
  components: {
    BannerV2
  },
  data() {
    return {
      industries: [
        {
          name: 'Automotriz',
          description: 'Soluciones de manufactura de precisión para componentes y piezas del sector automotriz.',
          icon: 'fa-car',
          imageUrl: 'https://source.unsplash.com/featured/600x400?automotive,manufacturing,car',
          path: '/industrias-design/automotriz'
        },
        {
          name: 'Médica',
          description: 'Fabricación especializada para dispositivos e instrumentos médicos con altos estándares de calidad.',
          icon: 'fa-heartbeat',
          imageUrl: 'https://source.unsplash.com/featured/600x400?medical,equipment,healthcare',
          path: '/industrias-design/medica'
        },
        {
          name: 'Construcción',
          description: 'Servicios de manufactura para elementos estructurales y componentes utilizados en la industria de la construcción.',
          icon: 'fa-hard-hat',
          imageUrl: 'https://source.unsplash.com/featured/600x400?construction,architecture,building',
          path: '/industrias-design/construccion'
        },
        {
          name: 'Minera',
          description: 'Soluciones robustas para equipos y componentes utilizados en la exigente industria minera.',
          icon: 'fa-mountain',
          imageUrl: 'https://source.unsplash.com/featured/600x400?mining,industrial,excavation',
          path: '/industrias-design/minera'
        },
        {
          name: 'Aeroespacial',
          description: 'Componentes de alta precisión para la industria aeroespacial, cumpliendo con estrictos estándares de calidad.',
          icon: 'fa-plane',
          imageUrl: 'https://source.unsplash.com/featured/600x400?aerospace,aircraft,aviation',
          path: '/industrias-design/aeroespacial'
        },
        {
          name: 'Alimentos',
          description: 'Soluciones de manufactura para equipos y maquinaria utilizados en la industria alimenticia.',
          icon: 'fa-utensils',
          imageUrl: 'https://source.unsplash.com/featured/600x400?food,processing,industry',
          path: '/industrias-design/alimentos'
        },
        {
          name: 'Electrónica',
          description: 'Fabricación de componentes y piezas precisas para la industria electrónica y de telecomunicaciones.',
          icon: 'fa-microchip',
          imageUrl: 'https://source.unsplash.com/featured/600x400?electronics,circuit,technology',
          path: '/industrias-design/electronica'
        },
        {
          name: 'Energía',
          description: 'Componentes y soluciones para generación, transmisión y distribución de energía.',
          icon: 'fa-bolt',
          imageUrl: 'https://source.unsplash.com/featured/600x400?energy,power,electricity',
          path: '/industrias-design/energia'
        },
        {
          name: 'Agrícola',
          description: 'Fabricación de piezas y componentes para maquinaria y equipos utilizados en el sector agrícola.',
          icon: 'fa-tractor',
          imageUrl: 'https://source.unsplash.com/featured/600x400?agriculture,farming,machinery',
          path: '/industrias-design/agricola'
        },
        {
          name: 'Industrial',
          description: 'Soluciones integrales para el sector industrial, incluyendo maquinaria, equipos y componentes personalizados.',
          icon: 'fa-industry',
          imageUrl: 'https://source.unsplash.com/featured/600x400?industrial,machinery,factory',
          path: '/industrias-design/industrial'
        }
      ]
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.industries-page {
  background-color: var(--content-light);
  min-height: 100vh;
  padding: 0 0 4rem 0;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.industry-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #edf2f7;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
}

.industry-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(75, 110, 140, 0.15);
  border-color: transparent;
}

.industry-card:hover .card-content::before {
  opacity: 1;
}

.industry-card:hover .icon-container {
  transform: scale(1.1);
  background: white;
  box-shadow: 0 8px 30px rgba(75, 110, 140, 0.3);
}

.industry-card:hover .icon-container i {
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.industry-card:hover .industry-img {
  transform: scale(1.1);
}

.industry-card:hover .image-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
}

.industry-card:hover .industry-label {
  transform: translateY(-5px);
}

.industry-card:hover .card-body h3, 
.industry-card:hover .card-body p {
  color: white;
}

.industry-card:hover .learn-more {
  background: white;
  color: var(--content-primary);
  border-color: white;
}

.industry-card:hover .learn-more i {
  transform: translateX(4px);
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.card-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.industry-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.industry-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  transition: background 0.3s ease;
}

.icon-container {
  width: 80px;
  height: 80px;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.icon-container i {
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.industry-label {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(0);
  margin-top: 1rem;
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.card-body h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a202c;
  transition: color 0.3s ease;
}

.card-body p {
  color: #4a5568;
  line-height: 1.6;
  transition: color 0.3s ease;
  margin-bottom: 1.5rem;
}

.learn-more-wrapper {
  margin-top: auto;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.learn-more i {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .industries-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>
