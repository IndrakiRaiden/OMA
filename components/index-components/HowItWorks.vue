<template>
  <section class="how-it-works">
    <div class="container">
      <div class="content-grid">
        <div class="text-content">
          <h2>¿Cómo Funciona?</h2>
          <div class="steps">
            <div class="step">
              <span class="step-number">01</span>
              <h3>Análisis Inicial</h3>
              <p>Evaluamos tus necesidades específicas y objetivos empresariales para crear una solución personalizada.</p>
            </div>
            <div class="step">
              <span class="step-number">02</span>
              <h3>Desarrollo de Solución</h3>
              <p>Nuestro equipo de expertos diseña e implementa la solución tecnológica que mejor se adapte a tu empresa.</p>
            </div>
            <div class="step">
              <span class="step-number">03</span>
              <h3>Implementación y Soporte</h3>
              <p>Realizamos la implementación y proporcionamos soporte continuo para garantizar el éxito a largo plazo.</p>
            </div>
          </div>
        </div>
        <div class="image-content">
          <div class="placeholder">
            <div class="placeholder-content">
              <div class="placeholder-line"></div>
              <div class="placeholder-line"></div>
              <div class="placeholder-line"></div>
              <div class="placeholder-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  padding: 6rem 2rem;
  background: var(--color-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content h2 {
  color: var(--color-secondary);
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.step {
  position: relative;
  padding-left: 4rem;
}

.step-number {
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  opacity: 0.3;
}

.step h3 {
  color: var(--color-secondary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.step p {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder {
  width: 100%;
  aspect-ratio: 4/3;
  background: var(--color-light);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.placeholder-content {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.placeholder-line {
  height: 8px;
  background: rgba(75, 110, 140, 0.1);
  width: 100%;
  border-radius: 4px;
}

.placeholder-line:nth-child(2) {
  width: 80%;
}

.placeholder-line:nth-child(3) {
  width: 60%;
}

.placeholder-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(75, 110, 140, 0.1);
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .text-content h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .image-content {
    order: -1;
  }

  .placeholder {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
