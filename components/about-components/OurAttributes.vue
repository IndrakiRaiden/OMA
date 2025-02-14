<template>
  <section class="attributes">
    <div class="container">
      <h2>Atributos OMA</h2>
      <div class="attributes-grid">
        <div v-for="(attribute, index) in attributes" 
             :key="index" 
             class="attribute-card"
             :class="{ 'appear': true }"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="card-content">
            <h3>{{ attribute.title }}</h3>
            <p>{{ attribute.description }}</p>
          </div>
          <div class="card-border"></div>
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration top-right"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      attributes: [
        {
          title: 'Liderazgo',
          description: 'OMA es vista como una empresa líder en la orquestación y gestión de proyectos industriales.'
        },
        {
          title: 'Eficiencia',
          description: 'Optimizamos cada recurso, garantizando que los proyectos se entreguen a tiempo y dentro del presupuesto.'
        },
        {
          title: 'Calidad',
          description: 'Comprometidos con la excelencia, aseguramos que cada proyecto cumpla con los más altos estándares de calidad.'
        },
        {
          title: 'Confianza',
          description: 'Generamos relaciones basadas en la transparencia y la fiabilidad.'
        },
        {
          title: 'Elegancia',
          description: 'Cada interacción y diseño refleja profesionalismo y distinción.'
        },
        {
          title: 'Innovación',
          description: 'Buscamos constantemente nuevas formas de mejorar nuestros procesos y soluciones.'
        },
        {
          title: 'Responsabilidad',
          description: 'OMA se enfoca en la gestión responsable de los proyectos industriales.'
        },
        {
          title: 'Adaptabilidad',
          description: 'Nos adaptamos a las necesidades específicas de cada cliente.'
        },
        {
          title: 'Simplicidad',
          description: 'Simplificamos los procesos industriales, asegurando una experiencia clara y accesible.'
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

.attributes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.attribute-card {
  background: rgba(245, 245, 245, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  padding: 1.5rem;
}

.attribute-card:hover {
  transform: translateY(-5px);
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

.corner-decoration {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(75, 110, 140, 0.3);
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.attribute-card:hover .corner-decoration {
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

.attribute-card::before {
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

.attribute-card:hover::before {
  transform: translateX(-50%) scaleX(1);
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
  .attributes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
