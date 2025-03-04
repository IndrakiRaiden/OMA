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
            <div class="industry-card" v-for="(_, index) in 10" :key="index">
              <div class="card-content">
                <div class="industry-image">
                  <img :src="`https://source.unsplash.com/featured/600x400?${
                    index === 0 ? 'automotive,manufacturing,car' : 
                    index === 1 ? 'medical,equipment,healthcare' :
                    index === 2 ? 'construction,architecture,building' :
                    index === 3 ? 'mining,industrial,excavation' :
                    index === 4 ? 'aerospace,aircraft,aviation' :
                    index === 5 ? 'food,processing,industry' :
                    index === 6 ? 'electronics,circuit,technology' :
                    index === 7 ? 'energy,power,electricity' :
                    index === 8 ? 'agriculture,farming,machinery' :
                    'industrial,machinery,factory'
                  }`" :alt="`Industria ${
                    index === 0 ? 'Automotriz' :
                    index === 1 ? 'Médica' :
                    index === 2 ? 'Construcción' :
                    index === 3 ? 'Minera' :
                    index === 4 ? 'Aeroespacial' :
                    index === 5 ? 'Alimentos' :
                    index === 6 ? 'Electrónica' :
                    index === 7 ? 'Energía' :
                    index === 8 ? 'Agrícola' :
                    'Maquinaria y equipos industriales'
                  }`" class="industry-img" />
                  <div class="image-overlay">
                    <div class="icon-container">
                      <i :class="['fas', 
                        index === 0 ? 'fa-car' : 
                        index === 1 ? 'fa-heartbeat' :
                        index === 2 ? 'fa-hard-hat' :
                        index === 3 ? 'fa-mountain' :
                        index === 4 ? 'fa-plane' :
                        index === 5 ? 'fa-utensils' :
                        index === 6 ? 'fa-microchip' :
                        index === 7 ? 'fa-bolt' :
                        index === 8 ? 'fa-tractor' :
                        'fa-industry']"></i>
                    </div>
                    <div class="industry-label">
                      {{
                        index === 0 ? 'Automotriz' :
                        index === 1 ? 'Médica' :
                        index === 2 ? 'Construcción' :
                        index === 3 ? 'Minera' :
                        index === 4 ? 'Aeroespacial' :
                        index === 5 ? 'Alimentos' :
                        index === 6 ? 'Electrónica' :
                        index === 7 ? 'Energía' :
                        index === 8 ? 'Agrícola' :
                        'Industrial'
                      }}
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h3>
                    {{
                      index === 0 ? 'Automotriz' :
                      index === 1 ? 'Médica' :
                      index === 2 ? 'Construcción' :
                      index === 3 ? 'Minera' :
                      index === 4 ? 'Aeroespacial' :
                      index === 5 ? 'Alimentos' :
                      index === 6 ? 'Electrónica' :
                      index === 7 ? 'Energía' :
                      index === 8 ? 'Agrícola' :
                      'Maquinaria y equipos industriales'
                    }}
                  </h3>
                  <p>
                    {{
                      index === 0 ? 'Soluciones de manufactura de precisión para componentes y piezas del sector automotriz.' :
                      index === 1 ? 'Fabricación especializada para dispositivos e instrumentos médicos con altos estándares de calidad.' :
                      index === 2 ? 'Servicios de manufactura para elementos estructurales y componentes utilizados en la industria de la construcción.' :
                      index === 3 ? 'Soluciones robustas para equipos y componentes utilizados en la exigente industria minera.' :
                      index === 4 ? 'Fabricación de alta precisión para componentes aeroespaciales con estrictos controles de calidad.' :
                      index === 5 ? 'Manufactura de equipos y componentes para la industria alimentaria con materiales de grado alimenticio.' :
                      index === 6 ? 'Servicios especializados para componentes y carcasas de dispositivos electrónicos.' :
                      index === 7 ? 'Fabricación de componentes para sistemas de generación y distribución de energía.' :
                      index === 8 ? 'Soluciones de manufactura para maquinaria y equipos utilizados en el sector agrícola.' :
                      'Diseño y fabricación de componentes para maquinaria industrial y equipos especializados.'
                    }}
                  </p>
                  <a :href="
                    index === 0 ? '/industrias-design/automotriz' : 
                    index === 1 ? '/industrias-design/medica' :
                    index === 2 ? '/industrias-design/construccion' :
                    index === 3 ? '/industrias-design/minera' :
                    index === 4 ? '/industrias-design/aeroespacial' :
                    index === 5 ? '/industrias-design/alimentos' :
                    index === 6 ? '/industrias-design/electronica' :
                    index === 7 ? '/industrias-design/energia' :
                    index === 8 ? '/industrias-design/agricola' :
                    '/industrias-design/industrial'" 
                    class="learn-more">
                    {{ 'Ver Detalles' }}
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.industry-card h3 {
  color: var(--content-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}

.industry-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.learn-more {
  color: var(--content-primary);
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--content-primary);
  border-radius: 25px;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  background: transparent;
  position: relative;
  z-index: 2;
}

/* Responsive Styles */
@media (max-width: 1536px) {
  .industries-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .industries-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .card-body {
    padding: 1.5rem;
  }

  .industry-card h3 {
    font-size: 1.25rem;
  }
}
</style>
