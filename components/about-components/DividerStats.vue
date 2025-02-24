<template>
  <section class="section-divider">
    <div class="container mx-auto px-6">
      <div class="divider-content">
        <div class="divider-stat">
          <div class="divider-icon">
            <i class="fas fa-ruler-combined"></i>
          </div>
          <span class="divider-number">0.01mm</span>
          <span class="divider-label">Precisión</span>
        </div>
        <div class="divider-separator"></div>
        <div class="divider-stat featured">
          <div class="divider-icon">
            <i class="fas fa-clock"></i>
          </div>
          <span class="divider-number">24/7</span>
          <span class="divider-label">Operación</span>
        </div>
        <div class="divider-separator"></div>
        <div class="divider-stat">
          <div class="divider-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <span class="divider-number">100%</span>
          <span class="divider-label">Calidad</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-divider {
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(var(--content-primary-rgb), 0.02) 0%,
    rgba(var(--content-secondary-rgb), 0.02) 100%
  );
  margin-bottom: -3rem;
}

.divider-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.divider-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.divider-stat:hover {
  transform: translateY(-5px);
}

.divider-stat.featured {
  transform: translateY(-5px);
}

.divider-stat.featured:hover {
  transform: translateY(-8px);
}

.divider-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  transform: rotate(-10deg);
  transition: transform 0.3s ease;
}

.divider-stat:hover .divider-icon {
  transform: rotate(0deg);
}

.divider-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--content-primary);
  font-family: 'JetBrains Mono', monospace;
}

.divider-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
}

.divider-separator {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, 
    transparent,
    rgba(var(--content-primary-rgb), 0.2),
    transparent
  );
}

@media (max-width: 768px) {
  .divider-content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .divider-separator {
    width: 40px;
    height: 1px;
  }

  .section-divider {
    padding: 2.5rem 0;
    margin-bottom: -2rem;
  }
}
</style>
