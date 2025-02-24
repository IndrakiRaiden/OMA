<template>
  <section class="final-cta">
    <div class="geometric-shapes">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <div class="cta-content">
      <h2>Optimiza tu producción con OMA</h2>
      <p>Hablemos sobre tu proyecto</p>
      <NuxtLink to="/contact" class="primary-btn">Contacta con nosotros</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  position: relative;
  padding: 6rem 2rem;
  overflow: hidden;
  text-align: center;
  color: var(--color-light);
}

.final-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/index/5.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
}

.final-cta::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(0, 32, 96, 0.5) 0%,
    rgba(0, 32, 96, 0.7) 50%,
    rgba(0, 32, 96, 0.85) 100%
  ), linear-gradient(
    135deg,
    var(--content-primary) 0%,
    var(--content-secondary) 100%
  );
  opacity: 0.7;
  pointer-events: none;
  z-index: 1;
}

.geometric-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.shape {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: -50px;
  left: -100px;
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: 50px;
  right: -50px;
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: -30px;
  left: 30%;
}

.cta-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.primary-btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--color-light);
  color: var(--content-primary);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .final-cta {
    padding: 4rem 1rem;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }

  .cta-content p {
    font-size: 1rem;
  }
}
</style>
