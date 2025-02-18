<template>
  <section class="services-section">
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
</template>

<script>
export default {
  name: 'ServiciosGrid',
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
}
</script>

<style scoped>
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

  .services-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    height: auto;
    min-height: 280px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .overlay-description {
    font-size: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .services-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
