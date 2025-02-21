<template>
  <div>
    <NavBar />
    <main class="servicios-page">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Nuestros Servicios</h1>
          <p class="hero-subtitle">Soluciones integrales para tus necesidades industriales</p>
          <div class="button-group">
            <a href="#servicios" class="primary-btn">Ver Servicios</a>
            <a href="#contacto" class="secondary-btn">Contáctanos</a>
          </div>
        </div>
      </section>

      <section id="servicios" class="services-section">
        <div class="services-container">
          <div v-for="(service, index) in services" 
               :key="index" 
               class="service-card"
               :class="{ 'active': activeCard === index }"
               @mouseenter="activeCard = index"
               @mouseleave="activeCard = null">
            <div class="card-content">
              <div class="icon-wrapper">
                <i :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <div class="card-overlay">
                <div class="overlay-content">
                  <p class="overlay-description">{{ service.extendedDescription }}</p>
                  <button class="learn-more-btn">
                    Más Información
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'ServiciosPage',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      activeCard: null,
      services: [
        {
          title: 'Manufactura CNC',
          description: 'Servicios de mecanizado de precisión con tecnología CNC de última generación.',
          extendedDescription: 'Fabricación de piezas y componentes con alta precisión utilizando tornos y fresadoras CNC. Especialistas en materiales como acero, aluminio, titanio y plásticos industriales.',
          icon: 'fas fa-cogs'
        },
        {
          title: 'Automatización Industrial',
          description: 'Soluciones de automatización para optimizar procesos productivos.',
          extendedDescription: 'Diseño e implementación de sistemas automatizados, integración de robots industriales y desarrollo de soluciones personalizadas para mejorar la eficiencia de su línea de producción.',
          icon: 'fas fa-robot'
        },
        {
          title: 'Diseño y Prototipado',
          description: 'Desarrollo de prototipos y diseño de piezas para manufactura.',
          extendedDescription: 'Servicios completos de diseño CAD/CAM, prototipado rápido y validación de diseños. Optimización de diseños para manufactura y reducción de costos.',
          icon: 'fas fa-drafting-compass'
        },
        {
          title: 'Mantenimiento Industrial',
          description: 'Servicios de mantenimiento preventivo y correctivo para equipos CNC.',
          extendedDescription: 'Programas de mantenimiento personalizados, reparación de maquinaria CNC, actualización de sistemas y calibración de equipos para asegurar la máxima precisión.',
          icon: 'fas fa-tools'
        },
        {
          title: 'Consultoría Técnica',
          description: 'Asesoría especializada en procesos de manufactura y automatización.',
          extendedDescription: 'Consultoría en optimización de procesos, selección de tecnología, implementación de sistemas de control de calidad y capacitación técnica para su personal.',
          icon: 'fas fa-clipboard-check'
        },
        {
          title: 'Proyectos Especiales',
          description: 'Desarrollo de soluciones personalizadas para necesidades específicas.',
          extendedDescription: 'Gestión integral de proyectos industriales, desde el diseño conceptual hasta la implementación final. Soluciones a medida para desafíos únicos de manufactura.',
          icon: 'fas fa-project-diagram'
        }
      ]
    }
  }
})
</script>

<style scoped>
.servicios-page {
  background-color: #f8fafc;
  overflow: hidden;
  position: relative;
}

.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  color: var(--content-light);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInDown 1.2s ease-out;
}

.hero-subtitle {
  color: var(--content-light);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  animation: slideInUp 1.2s ease-out;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeIn 1.5s ease-out;
}

.primary-btn {
  background: var(--content-secondary);
  color: var(--content-light);
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--content-secondary);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.secondary-btn {
  background: transparent;
  color: var(--content-light);
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  border: 2px solid var(--content-light);
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: var(--content-light);
  color: var(--content-primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Animated background shapes */
.hero-section::before,
.hero-section::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite;
}

.hero-section::before {
  top: -100px;
  right: -100px;
}

.hero-section::after {
  bottom: -100px;
  left: -100px;
  animation-delay: -10s;
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

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem;
  }
  
  .button-group {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-btn,
  .secondary-btn {
    width: 100%;
  }
}

.services-section {
  padding: 6rem 2rem;
  background-color: var(--color-primary);
  min-height: 100vh;
}

.services-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  perspective: 1000px;
}

.service-card {
  position: relative;
  height: 300px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.card-content {
  position: relative;
  height: 100%;
  padding: 2rem;
  background: var(--color-light);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.service-card.active .card-content {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-secondary) 0%, #2C4C6B 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.service-card.active .icon-wrapper {
  transform: scale(1.1);
}

.icon-wrapper i {
  font-size: 1.5rem;
  color: var(--color-light);
}

.service-card h3 {
  color: var(--color-secondary);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.service-card p {
  color: var(--color-dark);
  line-height: 1.6;
  transition: color 0.3s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(75, 110, 140, 0.98) 0%, rgba(44, 76, 107, 0.98) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 1rem;
}

.service-card.active .card-overlay {
  opacity: 1;
}

.service-card.active h3,
.service-card.active p {
  color: var(--color-light);
}

.overlay-content {
  color: var(--color-light);
  text-align: center;
}

.overlay-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
}

.learn-more-btn {
  background: transparent;
  border: 2px solid var(--color-light);
  color: var(--color-light);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.learn-more-btn:hover {
  background: var(--color-light);
  color: var(--color-secondary);
}

.learn-more-btn i {
  transition: transform 0.3s ease;
}

.learn-more-btn:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .services-section {
    padding: 4rem 1rem;
  }

  .service-card {
    height: auto;
    min-height: 280px;
  }
}
</style>
