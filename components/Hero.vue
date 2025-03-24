<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-bg"></div>
    <div class="hero-content">
      <span class="pre-title">BIENVENIDOS A</span>
      <h1 class="hero-title">OMA SOLUTIONS</h1>
      <div class="hero-text">
        <p class="main-text">Soluciones integrales para proyectos industriales</p>
      </div>
      <div class="hero-features">
        <div class="hero-features-row top-row">
          <NuxtLink to="/servicios" class="feature" v-for="(feature, index) in features.slice(0, 4)" :key="index">
            <i :class="feature.icon"></i>
            <span>{{ feature.text }}</span>
          </NuxtLink>
        </div>
        <div class="hero-features-row bottom-row">
          <NuxtLink to="/servicios" class="feature" v-for="(feature, index) in features.slice(4, 6)" :key="index + 4">
            <i :class="feature.icon"></i>
            <span>{{ feature.text }}</span>
          </NuxtLink>
        </div>
      </div>
      <div class="cta-buttons">
        <NuxtLink to="/cotiza" class="primary-btn">
          Cotiza tu proyecto
          <i class="fas fa-arrow-right"></i>
        </NuxtLink>
        <NuxtLink to="/servicios" class="secondary-btn">
          Ver servicios
          <i class="fas fa-chevron-right"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="geometric-shapes">
      <div class="shape" v-for="n in 5" :key="n"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const features = [
  { icon: 'fas fa-cog', text: 'Maquinado Convencional' },
  { icon: 'fas fa-industry', text: 'Producción' },
  { icon: 'fas fa-tools', text: 'Maquinado CNC' },
  { icon: 'fas fa-bolt', text: 'Corte Láser' },
  { icon: 'fas fa-spray-can', text: 'Acabados' },
  { icon: 'fas fa-fill-drip', text: 'Recubrimientos' },
];
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-primary);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../public/images/hero/2.jpg') center/cover no-repeat;
  z-index: 0;
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
    var(--color-secondary) 50%,
    var(--color-primary) 100%
  );
  background-size: 400% 400%;
  animation: gradientMove 8s ease infinite;
  z-index: 1;
  backdrop-filter: blur(5px);
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pre-title {
  display: block;
  font-size: clamp(0.875rem, 2vw, 1rem);
  letter-spacing: 4px;
  color: var(--color-secondary);
  margin-bottom: 1rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  color: var(--color-light);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 4px 8px rgba(0,0,0,0.2);
  letter-spacing: -1px;
}

.hero-text {
  color: var(--color-light);
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
}

.main-text {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
  justify-content: center;
  margin: 2.5rem 0;
  width: 100%;
}

.hero-features-row {
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.top-row {
  margin-bottom: 0.5rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-light);
  font-size: clamp(1rem, 2vw, 1.1rem);
  padding: 0.75rem 1.5rem;
  background: rgba(255,255,255,0.1);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature:hover {
  background: rgba(255,255,255,0.15);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 2px solid var(--color-secondary);
}

.feature:hover i {
  color: var(--color-accent);
}

.feature i {
  color: var(--color-secondary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.feature span {
  transition: all 0.3s ease;
}

.cta-buttons {
  display: flex;
  gap: clamp(1rem, 3vw, 1.5rem);
  justify-content: center;
  margin-top: 2.5rem;
  width: 100%;
  flex-wrap: wrap;
}

.primary-btn, .secondary-btn {
  padding: 1rem 2rem;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  min-width: 200px;
  text-decoration: none;
}

.primary-btn {
  background: linear-gradient(135deg, 
    var(--color-accent) 0%,
    var(--color-secondary) 50%,
    var(--color-accent) 100%
  );
  background-size: 300% 300%;
  color: var(--color-light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  animation: buttonGradient 3s ease infinite;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

@keyframes buttonGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.secondary-btn {
  background: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.geometric-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(5px);
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  top: 40%;
  right: 15%;
}

.shape:nth-child(4) {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
}

.shape:nth-child(5) {
  width: 250px;
  height: 250px;
  top: 20%;
  left: 10%;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 15px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .primary-btn, .secondary-btn {
    width: 100%;
    min-width: auto;
  }

  .hero-features {
    gap: 1rem;
  }

  .feature {
    width: calc(50% - 0.5rem);
    justify-content: center;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .feature {
    width: 100%;
  }
}
</style>
