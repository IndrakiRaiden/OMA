<template>
  <section class="benefits">
    <div class="section-header">
      <span class="subtitle">BENEFICIOS</span>
      <h2>¿Por qué elegir OMA?</h2>
    </div>
    <div class="cards-grid">
      <div class="solution-card" style="--card-index: 1">
        <div class="icon-wrapper">
          <i class="fas fa-industry"></i>
        </div>
        <div class="card-content">
          <h3>Todo en un solo lugar</h3>
          <p>Fabricación, Acabados, ensamblaje, tratamientos, recubrimientos y entrega sin complicaciones.</p>
        </div>
      </div>
      <div class="solution-card" style="--card-index: 2">
        <div class="icon-wrapper">
          <i class="fas fa-certificate"></i>
        </div>
        <div class="card-content">
          <h3>Calidad garantizada</h3>
          <p>Procesos certificados y precisión en cada pieza.</p>
        </div>
      </div>
      <div class="solution-card" style="--card-index: 3">
        <div class="icon-wrapper">
          <i class="fas fa-microchip"></i>
        </div>
        <div class="card-content">
          <h3>Industria 4.0</h3>
          <p>Tecnología avanzada en manufactura.</p>
        </div>
      </div>
      <div class="solution-card" style="--card-index: 4">
        <div class="icon-wrapper">
          <i class="fas fa-users"></i>
        </div>
        <div class="card-content">
          <h3>Atención personalizada</h3>
          <p>Soluciones adaptadas a cada cliente.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>

<style scoped>
.benefits {
  padding: 7rem 2rem;
  background: var(--content-light);
  position: relative;
  overflow: hidden;
}

.benefits .section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.benefits .subtitle {
  color: var(--content-secondary);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
  animation: fadeInDown 1s ease;
}

.benefits h2 {
  color: var(--content-primary);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease 0.2s both;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1300px;
  margin: 0 auto;
  align-items: stretch;
}

.solution-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #f0f0f0;
  animation: fadeIn 0.5s ease both;
  animation-delay: calc(var(--card-index) * 0.15s);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.solution-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.icon-wrapper {
  background: var(--content-primary);
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.icon-wrapper i {
  font-size: 1.8rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.solution-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--content-primary);
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 1rem;
}

.solution-card p {
  color: var(--content-dark);
  line-height: 1.6;
  font-size: 1rem;
  opacity: 0.85;
  margin: 0;
  transition: all 0.3s ease;
  flex-grow: 1;
}

.solution-card:hover {
  border-color: transparent;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.solution-card:hover::before {
  opacity: 1;
}

.solution-card:hover .icon-wrapper {
  background: var(--content-secondary);
}

.solution-card:hover .icon-wrapper i {
  transform: scale(1.1);
}

.solution-card:hover h3 {
  color: white;
}

.solution-card:hover h3::after {
  width: 60px;
  opacity: 0.3;
}

.solution-card:hover p {
  color: white;
  opacity: 0.9;
}

@media (max-width: 1200px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits {
    padding: 5rem 1.5rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefits h2 {
    font-size: 2.2rem;
  }
  
  .solution-card {
    padding: 2rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
