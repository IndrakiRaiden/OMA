<template>
  <section class="timeline-section">
    <div class="section-header">
      <span class="subtitle">PROCESO DE PRODUCCIÓN</span>
      <h2>De la idea a la entrega</h2>
      <p>Orquestamos todo el proceso productivo</p>
    </div>
    <div class="timeline-container">
      <div class="timeline">
        <div class="timeline-step" style="--step-index: 1">
          <i class="fas fa-box"></i>
          <span>Materia Prima</span>
        </div>
        <div class="timeline-step" style="--step-index: 2">
          <i class="fas fa-cogs"></i>
          <span>Fabricación</span>
        </div>
        <div class="timeline-step" style="--step-index: 3">
          <i class="fas fa-flask"></i>
          <span>Tratamientos</span>
        </div>
        <div class="timeline-step" style="--step-index: 4">
          <i class="fas fa-paint-roller"></i>
          <span>Acabados</span>
        </div>
        <div class="timeline-step" style="--step-index: 5">
          <i class="fas fa-tools"></i>
          <span>Ensamblaje</span>
        </div>
        <div class="timeline-step" style="--step-index: 6">
          <i class="fas fa-truck"></i>
          <span>Entrega</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style scoped>
.timeline-section {
  padding: 8rem 2rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.timeline-section .section-header {
  text-align: center;
  margin-bottom: 6rem;
  color: white;
  position: relative;
  z-index: 2;
}

.timeline-section .subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
  animation: fadeInDown 1s ease;
}

.timeline-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease 0.2s both;
  background: white;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeIn 1s ease 0.4s both;
}

.timeline-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%);
}

.timeline::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background: white;
  transform: translateY(-50%) scaleX(0);
  transform-origin: left;
  animation: progressLine 3s ease-out forwards;
}

.timeline-step {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  z-index: 2;
  min-width: 160px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease both;
  animation-delay: calc(var(--step-index) * 0.2s);
}

.timeline-step:hover {
  transform: translateY(-15px);
  background: rgba(255, 255, 255, 0.2);
}

.timeline-step i {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  display: block;
  transition: all 0.3s ease;
}

.timeline-step:hover i {
  transform: scale(1.2);
}

.timeline-step span {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  transition: all 0.3s ease;
}

@keyframes progressLine {
  0% {
    transform: translateY(-50%) scaleX(0);
  }
  100% {
    transform: translateY(-50%) scaleX(1);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  
  .timeline::before,
  .timeline::after {
    width: 3px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .timeline::after {
    transform: translateX(-50%) scaleY(0);
    animation: progressLineVertical 3s ease-out forwards;
  }
  
  .timeline-step {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
}

@keyframes progressLineVertical {
  0% {
    transform: translateX(-50%) scaleY(0);
  }
  100% {
    transform: translateX(-50%) scaleY(1);
  }
}
</style>
