<template>
  <div>
    <NavBar />
    <main class="industries-page">
      <BannerV1 
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
            <div class="industry-card" v-for="(_, index) in 12" :key="index">
              <div class="card-content">
                <div class="card-body">
                  <div class="icon-container">
                    <i :class="['fas', 
                      index === 0 ? 'fa-cog' : 
                      index === 1 ? 'fa-cube' :
                      index === 2 ? 'fa-tools' :
                      index === 3 ? 'fa-microchip' :
                      index === 4 ? 'fa-drafting-compass' :
                      index === 5 ? 'fa-industry' :
                      index === 6 ? 'fa-robot' :
                      index === 7 ? 'fa-layer-group' :
                      index === 8 ? 'fa-microscope' :
                      index === 9 ? 'fa-cogs' :
                      index === 10 ? 'fa-print' :
                      'fa-shapes']"></i>
                  </div>
                  <h3>
                    {{
                      index === 0 ? 'Mecanizado CNC' :
                      index === 1 ? 'Prototipado Rápido' :
                      index === 2 ? 'Fabricación de Moldes' :
                      index === 3 ? 'Electrónica CNC' :
                      index === 4 ? 'Diseño CAD/CAM' :
                      index === 5 ? 'Automatización CNC' :
                      index === 6 ? 'Robótica Industrial' :
                      index === 7 ? 'Manufactura Aditiva' :
                      index === 8 ? 'Control de Calidad' :
                      index === 9 ? 'Ingeniería Inversa' :
                      index === 10 ? 'Impresión 3D' :
                      'Diseño Paramétrico'
                    }}
                  </h3>
                  <p>
                    {{
                      index === 0 ? 'Servicios de mecanizado de precisión con máquinas CNC para piezas complejas y de alta precisión.' :
                      index === 1 ? 'Desarrollo rápido de prototipos mediante fresado CNC para validación de diseños y pruebas funcionales.' :
                      index === 2 ? 'Diseño y fabricación de moldes de inyección y matrices utilizando tecnología CNC de última generación.' :
                      index === 3 ? 'Fabricación de PCBs y componentes electrónicos mediante fresado CNC de alta precisión.' :
                      index === 4 ? 'Servicios de diseño y programación CAD/CAM para optimizar la producción CNC.' :
                      index === 5 ? 'Soluciones de automatización y control numérico para procesos de manufactura avanzada.' :
                      index === 6 ? 'Implementación de sistemas robóticos para automatización de procesos industriales.' :
                      index === 7 ? 'Tecnologías avanzadas de fabricación por capas para geometrías complejas.' :
                      index === 8 ? 'Inspección y verificación dimensional con equipos de medición de alta precisión.' :
                      index === 9 ? 'Digitalización y reconstrucción 3D de piezas para documentación y mejora.' :
                      index === 10 ? 'Servicios de impresión 3D profesional para prototipos y piezas finales.' :
                      'Diseño generativo y optimización topológica para componentes mecánicos.'
                    }}
                  </p>
                  <a :href="index === 0 ? '/industrias-design/mecanizado-cnc' : '#contacto'" class="learn-more">
                    {{ index === 0 ? 'Ver Detalles' : 'Más información' }}
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BannerV1 from '../components/BannerV1.vue'

export default {
  name: 'IndustriasPage',
  components: {
    NavBar,
    Footer,
    BannerV1
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
  padding: 4rem 0;
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

.card-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
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
  box-shadow: 0 4px 20px rgba(75, 110, 140, 0.2);
}

.icon-container i {
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;
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

/* Hover Effects */
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

.industry-card:hover h3,
.industry-card:hover p {
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

  .icon-container {
    width: 60px;
    height: 60px;
  }

  .icon-container i {
    font-size: 1.5rem;
  }

  .industry-card h3 {
    font-size: 1.25rem;
  }
}
</style>
