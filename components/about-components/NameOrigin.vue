<template>
  <section class="origin">
    <div class="container">
      <div class="origin-card" :class="{ 'appear': true }">
        <div class="card-content">
          <h2>Origen del Nombre</h2>
          <div class="origin-content">
            <p>OMA es una abreviatura de <span class="highlight">Orchestra, Manufacturing Assemblies</span>, que refleja nuestro enfoque en la orquestación de procesos industriales y la gestión de ensamblajes en el sector de manufactura.</p>
            <p>El nombre simboliza nuestra capacidad para coordinar y ejecutar proyectos con precisión y eficacia, asegurando que cada parte del proceso industrial funcione en armonía para lograr resultados excepcionales.</p>
          </div>
        </div>
        <div class="card-border"></div>
        <div class="corner-decoration top-left"></div>
        <div class="corner-decoration top-right"></div>
        <div class="corner-decoration bottom-left"></div>
        <div class="corner-decoration bottom-right"></div>
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

.origin {
  background: linear-gradient(45deg, #4B6E8C 0%, #333333 100%);
  color: #F5F5F5;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
}

.origin-card {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(245, 245, 245, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.card-content {
  padding: 2rem;
  position: relative;
  z-index: 1;
}

h2 {
  color: #F5F5F5;
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

section:hover h2::after {
  transform: scaleX(1);
}

.highlight {
  color: #FFD700;
  font-weight: bold;
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

.origin-card:hover .corner-decoration {
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
  .card-content {
    padding: 1.5rem;
  }
}
</style>
