<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="pre-title fade-in-first">BIENVENIDOS A</span>
      <h1 class="glowing-text">OMA SOLUTIONS</h1>
      <div class="hero-text fade-in">
        <p class="main-text">Soluciones integrales para la gestión y orquestación de proyectos industriales. Conectamos a nuestros clientes con los proveedores más capacitados, garantizando una ejecución precisa y eficiente.</p>
        <p class="vision-text">Nuestra visión es ser la plataforma líder en la administración y orquestación de proyectos industriales, transformando la manera en que las empresas gestionan sus necesidades.</p>
      </div>
      <div class="hero-features fade-in-last">
        <div class="feature">
          <i class="fas fa-crown"></i>
          <span>Liderazgo en la industria</span>
        </div>
        <div class="feature">
          <i class="fas fa-lightbulb"></i>
          <span>Innovación constante</span>
        </div>
        <div class="feature">
          <i class="fas fa-handshake"></i>
          <span>Confianza y elegancia</span>
        </div>
      </div>
      <button class="primary-btn hover-effect">Inicia tu proyecto</button>
    </div>
    <div class="geometric-shapes">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-primary);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
}

.glowing-text {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: bold;
  color: var(--color-light);
  text-shadow: 0 0 10px rgba(247, 247, 247, 0.3),
               0 0 20px rgba(247, 247, 247, 0.2),
               0 0 30px rgba(247, 247, 247, 0.1);
  animation: glow 2s ease-in-out infinite alternate;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.fade-in {
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
  margin: 2rem 0;
  color: var(--color-light);
  line-height: 1.6;
}

.pre-title {
  display: block;
  font-size: 1rem;
  letter-spacing: 4px;
  color: var(--color-secondary);
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-light);
}

.feature i {
  color: var(--color-secondary);
}

.fade-in-first {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.fade-in-last {
  opacity: 0;
  animation: fadeIn 1s ease-out 1s forwards;
}

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.shape {
  position: absolute;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
  opacity: 0.2;
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
  border-color: var(--color-secondary);
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: 30%;
  right: 15%;
  animation-direction: reverse;
  border-color: var(--color-light);
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: 10%;
  left: 30%;
  animation-duration: 15s;
  border-color: var(--color-secondary);
}

.primary-btn {
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--color-secondary);
  color: var(--color-light);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
}

.main-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-light);
}

.vision-text {
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--color-light);
  opacity: 0.9;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(247, 247, 247, 0.3),
                 0 0 20px rgba(247, 247, 247, 0.2),
                 0 0 30px rgba(247, 247, 247, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(247, 247, 247, 0.4),
                 0 0 30px rgba(247, 247, 247, 0.3),
                 0 0 40px rgba(247, 247, 247, 0.2);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 90vh;
  }
  
  .hero-content {
    padding: 0 1.5rem;
  }
  
  .primary-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .shape {
    opacity: 0.15;
  }
}
</style>
