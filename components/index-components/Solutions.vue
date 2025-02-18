<template>
  <section class="solutions">
    <div class="section-header">
      <h2>SOLUTIONS · SOLUTIONS · PROJECT MANAGEMENT</h2>
    </div>
    <div class="service-grid">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <div class="service-circle">
          <component :is="service.icon" class="service-icon" size="32" />
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <div class="card-footer">
          <span class="project-code">Project {{ index + 1 }}</span>
          <button class="secondary-btn">View More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Globe, Zap, Rocket } from 'lucide-vue-next'

export default {
  name: 'Solutions',
  components: {
    Globe,
    Zap,
    Rocket
  },
  data() {
    return {
      services: [
        {
          icon: 'Globe',
          title: 'GLOBAL',
          description: 'América · Europa · Asia'
        },
        {
          icon: 'Zap',
          title: 'INNOVACIÓN',
          description: 'Tecnología de Vanguardia'
        },
        {
          icon: 'Rocket',
          title: 'EXPRESS',
          description: 'Logística Internacional'
        }
      ]
    }
  }
}
</script>

<style scoped>
.solutions {
  padding: 4rem 2rem;
  background: var(--color-primary);
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-secondary);
  font-size: 0.9rem;
  letter-spacing: 2px;
  opacity: 0.9;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: var(--color-light);
  padding: 2rem;
  border-radius: 4px;
  text-align: center;
  border: 1px solid rgba(75, 110, 140, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: rgba(75, 110, 140, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
}

.service-circle {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-primary);
  border: 1px solid rgba(75, 110, 140, 0.1);
}

.service-icon {
  color: var(--color-secondary);
  opacity: 0.9;
}

.service-card h3 {
  color: var(--color-secondary);
  margin: 1rem 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 500;
}

.service-card p {
  color: var(--color-dark);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(75, 110, 140, 0.1);
}

.project-code {
  color: var(--color-gray);
  font-size: 0.8rem;
}

.secondary-btn {
  background: transparent;
  color: var(--color-secondary);
  border: 1px solid rgba(75, 110, 140, 0.2);
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(75, 110, 140, 0.05);
  border-color: rgba(75, 110, 140, 0.3);
}

@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
