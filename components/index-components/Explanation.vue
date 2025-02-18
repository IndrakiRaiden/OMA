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
  padding: 4rem 1rem;
  background: var(--color-light);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.explanation-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.text-content {
  padding-right: 1rem;
}

.text-content h2 {
  color: var(--color-secondary);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.text-content p {
  color: var(--color-dark);
  font-size: clamp(1rem, 2vw, 1.1rem);
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
  font-size: clamp(0.9rem, 2vw, 1.1rem);
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

@media (max-width: 1024px) {
  .explanation {
    padding: 3rem 1rem;
  }
  
  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .stat-item .number {
    font-size: 2rem;
  }
  
  .stat-item .label {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .explanation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-content {
    padding-right: 0;
  }
  
  .stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .explanation {
    padding: 2rem 1rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stat-item {
    text-align: center;
    padding: 1rem;
  }
  
  .stat-item .number {
    font-size: 2.2rem;
  }
  
  .stat-item .label {
    font-size: 1rem;
  }
}
</style>
