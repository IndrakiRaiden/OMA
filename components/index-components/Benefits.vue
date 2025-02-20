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
        <h3>Todo en un solo lugar</h3>
        <p>Fabricación, Acabados, ensamblaje, tratamientos, recubrimientos y entrega sin complicaciones.</p>
      </div>
      <div class="solution-card" style="--card-index: 2">
        <div class="icon-wrapper">
          <i class="fas fa-certificate"></i>
        </div>
        <h3>Calidad garantizada</h3>
        <p>Procesos certificados y precisión en cada pieza.</p>
      </div>
      <div class="solution-card" style="--card-index: 3">
        <div class="icon-wrapper">
          <i class="fas fa-microchip"></i>
        </div>
        <h3>Industria 4.0</h3>
        <p>Tecnología avanzada en manufactura.</p>
      </div>
      <div class="solution-card" style="--card-index: 4">
        <div class="icon-wrapper">
          <i class="fas fa-users"></i>
        </div>
        <h3>Atención personalizada</h3>
        <p>Soluciones adaptadas a cada cliente.</p>
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
  padding: 8rem 2rem;
  background: var(--content-light);
  position: relative;
  overflow: hidden;
}

.benefits .section-header {
  text-align: center;
  margin-bottom: 6rem;
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
  font-size: 3rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.solution-card {
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease both;
  animation-delay: calc(var(--card-index) * 0.2s);
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 1;
}

.solution-card:hover::before {
  opacity: 0.05;
}

.solution-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.solution-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(10deg);
}

.icon-wrapper i {
  font-size: 2.5rem;
  color: white;
  transition: all 0.3s ease;
}

.solution-card:hover .icon-wrapper i {
  transform: scale(1.1);
}

.solution-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--content-primary);
  position: relative;
  z-index: 2;
}

.solution-card p {
  color: var(--content-dark);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .solution-card {
    padding: 2rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
</style>
