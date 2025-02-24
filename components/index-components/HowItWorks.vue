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
          <div class="background-shape"></div>
          <img src="/images/index/3.jpg" alt="How it works illustration" class="feature-image">
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
  grid-template-columns: 45% 55%;
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
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-right: -4rem;
}

.background-shape {
  position: absolute;
  width: 110%;
  height: 95%;
  right: -8%;
  bottom: -8%;
  background: var(--color-secondary);
  opacity: 0.1;
  border-radius: 16px;
  transform: rotate(-4deg);
  z-index: 0;
  transition: transform 0.3s ease-in-out;
}

.feature-image {
  position: relative;
  width: 140%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  object-fit: cover;
  z-index: 1;
  margin-left: -15%;
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
}

.feature-image:hover {
  transform: scale(1.03) translateZ(0);
}

.image-content:hover .background-shape {
  transform: rotate(-2deg) scale(1.02);
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

  .feature-image {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
