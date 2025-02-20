<template>
  <section class="industries">
    <IndustriasBackground />
    <div class="content">
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
    </div>
  </section>
</template>

<script>
import { Plane, Car, Stethoscope, Zap } from 'lucide-vue-next'
import IndustryCard from './IndustryCard.vue'
import SectionHeader from './SectionHeader.vue'
import IndustriasBackground from '../backgrounds/IndustriasBackground.vue'

export default {
  name: 'Industries',
  components: {
    Plane,
    Car,
    Stethoscope,
    Zap,
    IndustryCard,
    SectionHeader,
    IndustriasBackground
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
  color: white;
}

.content {
  position: relative;
  z-index: 1;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
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
