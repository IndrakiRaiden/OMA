<template>
  <section class="stats-section">
    <div class="container mx-auto px-4">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" 
             :key="index" 
             class="stat-card"
             :style="{ animationDelay: `${index * 200}ms` }">
          <div class="stat-icon">
            <i :class="['fas', stat.icon]"></i>
          </div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompanyStats',
  data() {
    return {
      stats: [
        {
          icon: 'fa-calendar-alt',
          number: '15+',
          label: 'Años de Experiencia'
        },
        {
          icon: 'fa-users',
          number: '500+',
          label: 'Clientes Satisfechos'
        },
        {
          icon: 'fa-cogs',
          number: '10K+',
          label: 'Proyectos Completados'
        },
        {
          icon: 'fa-industry',
          number: '3',
          label: 'Centros de Manufactura'
        }
      ]
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, 
    rgba(var(--content-primary-rgb), 0.05) 0%,
    rgba(var(--content-secondary-rgb), 0.05) 100%
  );
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background: rgba(var(--content-primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon {
  background: var(--content-primary);
}

.stat-icon i {
  font-size: 1.5rem;
  color: var(--content-primary);
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon i {
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--content-primary);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.125rem;
  color: var(--content-gray);
  line-height: 1.4;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style>
