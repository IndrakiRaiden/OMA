<template>
  <section class="explanation">
    <div class="container">
      <div class="explanation-content">
        <div class="text-content">
          <h2>Innovación Industrial a tu Alcance</h2>
          <p>En OMA Industrial, transformamos la manera en que las empresas abordan sus desafíos tecnológicos. Nuestra experiencia se traduce en soluciones que impulsan la eficiencia y el crecimiento.</p>
          <ul class="features">
            <li>
              <span class="bullet">•</span>
              <span>Soluciones personalizadas para cada industria</span>
            </li>
            <li>
              <span class="bullet">•</span>
              <span>Tecnología de vanguardia e innovación constante</span>
            </li>
            <li>
              <span class="bullet">•</span>
              <span>Soporte técnico especializado 24/7</span>
            </li>
          </ul>
        </div>
        <div class="stats">
          <div class="stat-item">
            <span class="number">15+</span>
            <span class="label">Años de Experiencia</span>
          </div>
          <div class="stat-item">
            <span class="number">100+</span>
            <span class="label">Proyectos Completados</span>
          </div>
          <div class="stat-item">
            <span class="number">24/7</span>
            <span class="label">Soporte Técnico</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.explanation {
  padding: 6rem 2rem;
  background: var(--color-light);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.explanation-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content {
  padding-right: 2rem;
}

.text-content h2 {
  color: var(--color-secondary);
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.text-content p {
  color: var(--color-dark);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--color-dark);
  font-size: 1.1rem;
}

.bullet {
  color: var(--color-secondary);
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: 1;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  text-align: center;
  background: var(--color-primary);
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.label {
  color: var(--color-dark);
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .explanation-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .text-content {
    padding-right: 0;
  }

  .text-content h2 {
    font-size: 2rem;
  }

  .stats {
    padding: 2rem;
  }
}
</style>
