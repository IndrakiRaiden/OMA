<template>
  <section class="hero-section">
    <div class="container mx-auto px-4">
      <div class="hero-content">
        <div class="text-content" :class="{ 'appear': true }">
          <h1 class="title">Innovación en<br>Manufactura CNC</h1>
          <p class="subtitle">Transformando ideas en realidad con precisión y excelencia</p>
          <div class="cta-buttons">
            <a href="#historia" class="primary-btn">
              Nuestra Historia
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/contact" class="secondary-btn">
              Contáctanos
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="visual-content" :class="{ 'appear': true }" style="animation-delay: 0.2s;">
          <div class="hero-image">
            <div class="image-container">
              <div class="geometric-overlay"></div>
              <div class="pattern-grid"></div>
            </div>
          </div>
          <div class="floating-stats">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Años de Experiencia</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Clientes Satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-background"></div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem 0;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(var(--content-primary-rgb), 0.05) 0%,
    rgba(var(--content-secondary-rgb), 0.05) 100%
  );
  z-index: -1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content {
  opacity: 0;
  transform: translateY(20px);
  animation: appear 0.8s ease forwards;
}

.title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(135deg,
    var(--content-primary) 0%,
    var(--content-secondary) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--content-gray);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.primary-btn {
  background: var(--content-primary);
  color: white;
}

.secondary-btn {
  background: rgba(var(--content-primary-rgb), 0.1);
  color: var(--content-primary);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-3px);
}

.visual-content {
  position: relative;
  opacity: 0;
  transform: translateX(20px);
  animation: appear 0.8s ease forwards;
}

.hero-image {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 2rem;
  overflow: hidden;
}

.image-container {
  position: absolute;
  inset: 0;
  background: url('/images/hero-machine.jpg') center/cover;
}

.geometric-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(var(--content-primary-rgb), 0.2),
    rgba(var(--content-secondary-rgb), 0.2)
  );
  mix-blend-mode: multiply;
}

.pattern-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.floating-stats {
  position: absolute;
  bottom: 2rem;
  left: -2rem;
  right: -2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.stat-item {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--content-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--content-gray);
}

@keyframes appear {
  to {
    opacity: 1;
    transform: translate(0);
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .subtitle {
    margin: 0 auto 2rem;
  }

  .cta-buttons {
    justify-content: center;
  }

  .floating-stats {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .floating-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
