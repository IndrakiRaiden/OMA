<template>
  <section class="values">
    <div class="container">
      <h2>Nuestros Valores</h2>
      <div class="values-grid">
        <div v-for="(value, index) in values" 
             :key="index" 
             class="value-card"
             :class="{ 'appear': true }"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="card-content">
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
          <div class="card-border"></div>
          <div class="glow-effect"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          title: 'Liderazgo',
          description: 'Nos posicionamos como la autoridad en la gestión de proyectos industriales, guiando a nuestros clientes hacia el éxito.'
        },
        {
          title: 'Innovación',
          description: 'Buscamos constantemente nuevas soluciones y tecnologías para mejorar la eficiencia y efectividad en la orquestación de proyectos.'
        },
        {
          title: 'Compromiso',
          description: 'Estamos comprometidos con la calidad, la puntualidad y la satisfacción del cliente en cada proyecto que ejecutamos.'
        },
        {
          title: 'Confianza',
          description: 'Generamos relaciones de confianza con nuestros proveedores y clientes, garantizando transparencia y colaboración.'
        },
        {
          title: 'Elegancia y Profesionalismo',
          description: 'Cada interacción, cada servicio y cada diseño reflejan nuestra dedicación a la excelencia, con un enfoque en la elegancia y sofisticación.'
        }
      ]
    }
  }
}
</script>

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

section:hover h2::after {
  transform: scaleX(1);
}

h3 {
  color: #333333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  background: rgba(245, 245, 245, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  padding: 1.5rem;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card:hover .card-border {
  border-color: #FFD700;
  transition: border-color 0.3s ease;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(75, 110, 140, 0.2);
  border-radius: inherit;
  pointer-events: none;
}

.value-card::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  background: #FFD700;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.3s ease;
}

.value-card:hover::before {
  transform: translateX(-50%) scaleX(1);
}

.glow-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, 
    rgba(75, 110, 140, 0.1),
    transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.value-card:hover .glow-effect {
  opacity: 1;
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
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
