<template>
  <section class="solutions">
    <div class="solutions-container">
      <div class="section-header">
        <span class="subtitle">NUESTROS SERVICIOS</span>
        <h2>Soluciones Integrales</h2>
        <p>Conectamos y orquestamos todos los aspectos de tu proyecto industrial</p>
      </div>
      <div class="cards-grid">
        <div class="solution-card">
          <div class="icon-wrapper">
            <i class="fas fa-project-diagram"></i>
          </div>
          <h3>Gestión de Proyectos</h3>
          <p>Coordinación y administración integral de proyectos industriales con los más altos estándares de calidad</p>
        </div>
        <div class="solution-card">
          <div class="icon-wrapper">
            <i class="fas fa-handshake"></i>
          </div>
          <h3>Red de Proveedores</h3>
          <p>Conexión con los proveedores más capacitados para garantizar la excelencia en cada fase del proyecto</p>
        </div>
        <div class="solution-card">
          <div class="icon-wrapper">
            <i class="fas fa-check-circle"></i>
          </div>
          <h3>Control de Calidad</h3>
          <p>Supervisión y garantía de calidad en cada etapa del proceso productivo</p>
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
  }
}
</script>

<style scoped>
.solutions {
  padding: 6rem 2rem;
  background-color: var(--content-light);
  position: relative;
}

.solutions-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.subtitle {
  color: var(--content-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: block;
}

.section-header h2 {
  color: var(--content-primary);
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-header p {
  color: var(--content-dark);
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.solution-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background: linear-gradient(90deg, var(--content-primary), var(--content-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.solution-card:hover::before {
  transform: scaleX(1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: var(--content-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.icon-wrapper i {
  font-size: 2rem;
  color: var(--content-primary);
  transition: all 0.3s ease;
}

.solution-card:hover .icon-wrapper {
  background: var(--content-primary);
}

.solution-card:hover .icon-wrapper i {
  color: var(--content-light);
  transform: scale(1.1);
}

.solution-card h3 {
  color: var(--content-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.solution-card p {
  color: var(--content-dark);
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .solutions {
    padding: 4rem 1.5rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .solution-card {
    padding: 2rem 1.5rem;
  }
}
</style>
