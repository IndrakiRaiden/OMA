<template>
  <section class="timeline-section">
    <div class="container mx-auto px-4">
      <div class="section-header text-center">
        <h2 class="title">Nuestra Historia</h2>
        <p class="subtitle">Un viaje de innovación y crecimiento continuo</p>
      </div>

      <div class="timeline">
        <div v-for="(milestone, index) in milestones" 
             :key="index"
             class="milestone"
             :class="{ 'milestone-right': index % 2 === 0 }"
             :style="{ animationDelay: `${index * 200}ms` }">
          <div class="milestone-content">
            <div class="milestone-year">{{ milestone.year }}</div>
            <h3 class="milestone-title">{{ milestone.title }}</h3>
            <p class="milestone-description">{{ milestone.description }}</p>
            <div class="milestone-icon">
              <i :class="['fas', milestone.icon]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  data() {
    return {
      milestones: [
        {
          year: '2008',
          title: 'Fundación',
          description: 'OMA Solutions inicia operaciones con un pequeño taller de manufactura CNC.',
          icon: 'fa-flag'
        },
        {
          year: '2012',
          title: 'Expansión',
          description: 'Apertura de nuestro segundo centro de manufactura y ampliación de servicios.',
          icon: 'fa-chart-line'
        },
        {
          year: '2015',
          title: 'Certificación ISO',
          description: 'Obtención de certificaciones internacionales de calidad.',
          icon: 'fa-certificate'
        },
        {
          year: '2018',
          title: 'Innovación Tecnológica',
          description: 'Implementación de tecnologías de última generación y sistemas automatizados.',
          icon: 'fa-microchip'
        },
        {
          year: '2023',
          title: 'Liderazgo Industrial',
          description: 'Consolidación como líderes en soluciones de manufactura CNC en México.',
          icon: 'fa-trophy'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline-section {
  padding: 6rem 0;
  background: linear-gradient(135deg,
    rgba(var(--content-primary-rgb), 0.02) 0%,
    rgba(var(--content-secondary-rgb), 0.02) 100%
  );
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--content-dark);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--content-primary);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--content-gray);
  max-width: 600px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: rgba(var(--content-primary-rgb), 0.2);
}

.milestone {
  position: relative;
  width: 50%;
  padding: 2rem;
  opacity: 0;
  animation: fadeInSlide 0.8s ease-out forwards;
}

.milestone::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: var(--content-primary);
  border-radius: 50%;
}

.milestone-right {
  left: 50%;
}

.milestone-right::before {
  left: -10px;
}

.milestone:not(.milestone-right) {
  left: 0;
}

.milestone:not(.milestone-right)::before {
  right: -10px;
}

.milestone-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
}

.milestone-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.milestone-year {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--content-primary);
  color: white;
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.milestone-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-dark);
  margin-bottom: 0.5rem;
}

.milestone-description {
  color: var(--content-gray);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.milestone-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: rgba(var(--content-primary-rgb), 0.2);
  font-size: 2rem;
  transition: all 0.3s ease;
}

.milestone-content:hover .milestone-icon {
  transform: scale(1.2);
  color: rgba(var(--content-primary-rgb), 0.3);
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }

  .milestone {
    width: 100%;
    padding-left: 2.5rem;
  }

  .milestone::before {
    left: -9px;
  }

  .milestone-right {
    left: 0;
  }

  .title {
    font-size: 2rem;
  }

  .milestone-content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .timeline-section {
    padding: 4rem 0;
  }

  .milestone {
    padding-left: 2rem;
    padding-right: 1rem;
  }

  .milestone-year {
    font-size: 0.875rem;
  }

  .milestone-title {
    font-size: 1.125rem;
  }

  .milestone-description {
    font-size: 0.875rem;
  }
}
</style>
