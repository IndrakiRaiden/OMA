<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Soluciones Tecnológicas Innovadoras</h1>
      <p class="hero-subtitle">Transformando ideas en soluciones digitales de alto impacto</p>
      <div class="hero-cta">
        <button class="primary-btn">Conoce Más</button>
        <button class="secondary-btn">Ver Servicios</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/images/hero-bg.jpg') center/cover no-repeat;
  padding: 6rem 2rem 2rem;
  text-align: center;
  color: var(--color-light);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-btn,
.secondary-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.primary-btn {
  background-color: var(--color-accent);
  color: var(--color-light);
  border: none;
}

.secondary-btn {
  background-color: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
}

.primary-btn:hover {
  background-color: var(--color-accent-dark);
  transform: translateY(-2px);
}

.secondary-btn:hover {
  background-color: var(--color-light);
  color: var(--color-primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }
}
</style>
