<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="overlay"></div>
      <div class="pattern"></div>
    </div>
    <div class="content-wrapper">
      <h1 class="title">
        Soluciones Tecnológicas<br>
        <span class="highlight">Innovadoras</span>
      </h1>
      <p class="subtitle">Transformando ideas en soluciones digitales de alto impacto</p>
      <div class="button-group">
        <button class="primary-btn">Conoce Más</button>
        <button class="secondary-btn">Ver Servicios</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiciosHero'
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--content-light);
  overflow: hidden;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%);
  background-size: 100px 100px;
  animation: patternMove 20s linear infinite;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  animation: fadeInUp 1s ease-out;
}

.title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--content-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInDown 1.2s ease-out;
}

.highlight {
  color: var(--content-secondary);
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: var(--content-secondary);
  opacity: 0.2;
  z-index: -1;
  transform: skew(-12deg) rotate(-2deg);
  animation: highlightGlow 3s ease-in-out infinite;
}

.subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.3s forwards;
  margin: 0 auto 2rem;
  max-width: 600px;
  line-height: 1.6;
  color: var(--content-light);
}

.button-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation: fadeIn 1s ease-out 0.6s both;
}

.primary-btn {
  background: var(--content-secondary);
  color: var(--content-light);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: 0.5s;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background: var(--content-light);
  color: var(--content-primary);
}

.primary-btn:hover::before {
  left: 100%;
}

.secondary-btn {
  background: transparent;
  color: var(--content-light);
  padding: 1rem 2.5rem;
  border: 2px solid var(--content-light);
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.secondary-btn:hover {
  background: var(--content-light);
  color: var(--content-primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

@keyframes patternMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

@keyframes highlightGlow {
  0%, 100% {
    opacity: 0.2;
    transform: skew(-12deg) rotate(-2deg) scale(1);
  }
  50% {
    opacity: 0.3;
    transform: skew(-12deg) rotate(-2deg) scale(1.05);
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .content-wrapper {
    padding: 0 1.5rem;
  }

  .button-group {
    flex-direction: column;
    gap: 1rem;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
