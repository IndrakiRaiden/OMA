<template>
  <section class="industries">
    <div class="content">
      <div class="section-header" data-aos="fade-up">
        <span class="pre-title">NUESTRAS INDUSTRIAS</span>
        <h2 class="title">Experiencia en</h2>
        <p class="description">Soluciones especializadas para las industrias más exigentes</p>
      </div>
      
      <div class="spacer"></div>
      
      <div class="industries-grid">
        <div v-for="(industry, index) in industries" 
             :key="index"
             class="card-wrapper"
             data-aos="fade-up"
             :data-aos-delay="index * 100">
          <IndustryCard
            :icon="industry.icon"
            :title="industry.title"
            :description="industry.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Plane, Car, Stethoscope, Zap } from 'lucide-vue-next'
import IndustryCard from './IndustryCard.vue'

export default {
  name: 'Industries',
  components: {
    IndustryCard,
    Plane,
    Car,
    Stethoscope,
    Zap
  },
  data() {
    return {
      industries: [
        { 
          icon: Plane, 
          title: 'Aeroespacial',
          description: 'Soluciones de alta precisión para la industria aeroespacial'
        },
        { 
          icon: Car, 
          title: 'Automotriz',
          description: 'Innovación en manufactura y automatización automotriz'
        },
        { 
          icon: Stethoscope, 
          title: 'Médico',
          description: 'Tecnología de vanguardia para equipos médicos'
        },
        { 
          icon: Zap, 
          title: 'Energía',
          description: 'Sistemas eficientes para el sector energético'
        }
      ]
    }
  }
}
</script>

<style scoped>
.industries {
  padding: var(--space-20) 0;
  background: var(--color-white);
}

.content {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-48);
}

.pre-title {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 4px;
  color: #F7A01F;
  margin-bottom: var(--space-4);
  display: block;
  text-transform: uppercase;
}

.title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #9F8E66;
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

.description {
  font-size: var(--text-lg);
  color: #9F8E66;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  margin-bottom: var(--space-16);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.card-wrapper {
  height: 100%;
}

.spacer {
  height: 6rem;
}

@media (max-width: 1200px) {
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .industries {
    padding: var(--space-12) 0;
  }

  .content {
    padding: 0 var(--space-4);
  }

  .industries-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
