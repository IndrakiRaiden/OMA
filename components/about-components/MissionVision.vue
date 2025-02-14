<template>
  <section class="mission-vision">
    <div class="container">
      <div class="section-grid">
        <div class="info-card" :class="{ 'appear': true }">
          <div class="card-content">
            <div class="icon">🎯</div>
            <h2>Misión</h2>
            <p>En OMA, ofrecemos soluciones integrales para la gestión y orquestación de proyectos industriales. Nos especializamos en conectar a nuestros clientes con los proveedores más capacitados, garantizando una ejecución precisa y eficiente de sus proyectos.</p>
          </div>
          <div class="card-border"></div>
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration top-right"></div>
          <div class="corner-decoration bottom-left"></div>
          <div class="corner-decoration bottom-right"></div>
        </div>
        <div class="info-card" :class="{ 'appear': true }" style="animation-delay: 0.2s;">
          <div class="card-content">
            <div class="icon">🔭</div>
            <h2>Visión</h2>
            <p>Ser la plataforma líder en la administración y orquestación de proyectos industriales, brindando soluciones innovadoras que transformen la manera en que las empresas gestionan sus necesidades industriales.</p>
          </div>
          <div class="card-border"></div>
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration top-right"></div>
          <div class="corner-decoration bottom-left"></div>
          <div class="corner-decoration bottom-right"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 5rem 0;
  position: relative;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.info-card {
  background: rgba(245, 245, 245, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #FFD700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

h2 {
  color: #4B6E8C;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #FFD700;
  margin: 15px auto 0;
  transform: scaleX(0.7);
  transition: transform 0.3s ease;
}

.card-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(75, 110, 140, 0.2);
  border-radius: inherit;
  pointer-events: none;
}

.corner-decoration {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(75, 110, 140, 0.3);
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.info-card:hover .corner-decoration {
  border-color: #FFD700;
}

.top-left {
  top: 10px;
  left: 10px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 10px;
  right: 10px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 10px;
  left: 10px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 10px;
  right: 10px;
  border-left: none;
  border-top: none;
}

.appear {
  opacity: 0;
  transform: translateY(20px);
  animation: appear 0.6s ease forwards;
}

@keyframes appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-grid {
    grid-template-columns: 1fr;
  }
}
</style>
