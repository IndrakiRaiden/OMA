<template>
  <section class="industries">
    <SectionHeader>INDUSTRIAS · INDUSTRIES</SectionHeader>
    <div class="industries-grid">
      <IndustryCard
        v-for="(industry, index) in industries"
        :key="index"
        :icon="industry.icon"
        :title="industry.title"
        :line-color="industry.lineColor"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import { Plane, Car, Stethoscope, Zap } from 'lucide-vue-next'
import IndustryCard from './IndustryCard.vue'
import SectionHeader from './SectionHeader.vue'

export default {
  name: 'Industries',
  components: {
    Plane,
    Car,
    Stethoscope,
    Zap,
    IndustryCard,
    SectionHeader
  },
  data() {
    return {
      industries: []
    }
  },
  created() {
    const cards = [
      { icon: Plane, title: 'Aeroespacial' },
      { icon: Car, title: 'Automotriz' },
      { icon: Stethoscope, title: 'Médico' },
      { icon: Zap, title: 'Energía' }
    ];

    // Asignar colores alternados para los iconos
    this.industries = cards.map((card, index) => ({
      ...card,
      lineColor: index % 2 === 0 ? '#4B6E8C' : '#FFD700'
    }));
  }
}
</script>

<style scoped>
.industries {
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
  background: var(--color-primary);
}

.industries::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.1),
    transparent
  );
}

.industries::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.1),
    transparent
  );
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .industries-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 640px) {
  .industries {
    padding: 4rem 1rem 3rem;
  }
}
</style>
