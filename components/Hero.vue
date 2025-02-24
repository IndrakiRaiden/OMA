<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="pre-title">BIENVENIDOS A</span>
      <h1 class="hero-title">OMA SOLUTIONS</h1>
      <div class="hero-text">
        <p class="main-text">Soluciones integrales para proyectos industriales</p>
      </div>
      <div class="hero-features">
        <div class="feature">
          <i class="fas fa-industry"></i>
          <span>Manufactura</span>
        </div>
        <div class="feature">
          <i class="fas fa-cogs"></i>
          <span>Automatización</span>
        </div>
        <div class="feature">
          <i class="fas fa-tools"></i>
          <span>Ingeniería</span>
        </div>
      </div>
      <div class="cta-buttons">
        <NuxtLink to="/cotiza" class="primary-btn hover-effect">Cotiza tu proyecto</NuxtLink>
        <NuxtLink to="/servicios" class="secondary-btn">Ver servicios</NuxtLink>
      </div>
    </div>
    <div class="geometric-shapes">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url('../public/images/hero/2.jpg') center/cover no-repeat;
  background-color: var(--color-primary);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.85;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s ease-out;
}

.pre-title {
  display: block;
  font-size: 1rem;
  letter-spacing: 4px;
  color: var(--color-secondary);
  margin-bottom: 1rem;
  font-weight: 600;
  animation: fadeInLeft 0.8s ease-out 0.2s both;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: bold;
  color: var(--color-light);
  margin-bottom: 1rem;
  line-height: 1.2;
  animation: fadeInRight 0.8s ease-out 0.4s both;
}

.hero-text {
  color: var(--color-light);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
  width: 100%;
  animation: fadeIn 0.8s ease-out 0.8s both;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-light);
  font-size: 1.1rem;
}

.feature i {
  color: var(--color-secondary);
  font-size: 1.2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  animation: fadeInUp 0.8s ease-out 1s both;
}

.primary-btn, .secondary-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  text-decoration: none;
}

.primary-btn {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
  color: var(--color-light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.secondary-btn {
  background: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease, color 0s ease 0.1s;
}

.secondary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  z-index: -1;
  transition: width 0.3s ease;
}

.secondary-btn:hover {
  color: var(--color-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.secondary-btn:hover::before {
  width: 100%;
}

.hover-effect {
  position: relative;
  overflow: hidden;
}

.hover-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.hover-effect:hover::after {
  left: 100%;
}

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 50%;
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: 50px;
  left: -100px;
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: -75px;
  right: 10%;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  .main-text {
    font-size: 1.1rem;
  }

  .hero-features {
    gap: 1rem;
  }

  .feature {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .primary-btn, .secondary-btn {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
</style>
