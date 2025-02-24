<template>
  <section class="intro-frames">
    <div class="container mx-auto px-4">
      <div class="section-header text-center mb-12">
        <h2 class="section-title">¿Por qué elegirnos?</h2>
        <p class="section-subtitle">Descubre cómo nuestra experiencia y compromiso con la innovación nos distinguen en la industria manufacturera.</p>
      </div>
      <div class="frames-grid">
        <div class="frame">
          <div class="frame-icon">
            <i class="fas fa-cogs"></i>
          </div>
          <h3 class="frame-title">Tecnología de Punta</h3>
          <p class="frame-text">
            Utilizamos la última tecnología en maquinaria CNC y software de diseño para garantizar la máxima precisión.
          </p>
        </div>
        <div class="frame">
          <div class="frame-icon">
            <i class="fas fa-users"></i>
          </div>
          <h3 class="frame-title">Equipo Experto</h3>
          <p class="frame-text">
            Nuestro equipo altamente capacitado cuenta con años de experiencia en la industria manufacturera.
          </p>
        </div>
        <div class="frame">
          <div class="frame-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="frame-title">Mejora Continua</h3>
          <p class="frame-text">
            Constantemente buscamos formas de mejorar nuestros procesos y servicios.
          </p>
        </div>
        <div class="frame">
          <div class="frame-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <h3 class="frame-title">Servicio Personalizado</h3>
          <p class="frame-text">
            Trabajamos estrechamente con nuestros clientes para entender y satisfacer sus necesidades específicas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-frames {
  padding: 4rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--content-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--content-secondary);
  max-width: 2xl;
  margin: 0 auto;
  opacity: 0.9;
}

.frames-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.frame {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.frame:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.frame-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  transform: rotate(-10deg);
  transition: transform 0.3s ease;
}

.frame:hover .frame-icon {
  transform: rotate(0deg);
}

.frame-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-primary);
  margin-bottom: 0.5rem;
}

.frame-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .frames-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
