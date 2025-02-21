<template>
  <section class="mission-vision">
    <div class="container mx-auto px-4">
      <div class="section-header text-center">
        <h2 class="title">Nuestra Esencia</h2>
        <p class="subtitle">Impulsando la excelencia en manufactura CNC</p>
      </div>

      <div class="cards-container">
        <div class="mission-card" :class="{ 'appear': true }">
          <div class="card-inner">
            <div class="card-front">
              <div class="icon-wrapper">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Misión</h3>
              <div class="hover-hint">
                <i class="fas fa-hand-pointer"></i>
                <span>Ver más</span>
              </div>
            </div>
            <div class="card-back">
              <p>En OMA, ofrecemos soluciones integrales para la gestión y orquestación de proyectos industriales. Nos especializamos en conectar a nuestros clientes con los proveedores más capacitados, garantizando una ejecución precisa y eficiente de sus proyectos.</p>
            </div>
          </div>
        </div>

        <div class="vision-card" :class="{ 'appear': true }" style="animation-delay: 0.2s;">
          <div class="card-inner">
            <div class="card-front">
              <div class="icon-wrapper">
                <i class="fas fa-telescope"></i>
              </div>
              <h3>Visión</h3>
              <div class="hover-hint">
                <i class="fas fa-hand-pointer"></i>
                <span>Ver más</span>
              </div>
            </div>
            <div class="card-back">
              <p>Ser la plataforma líder en la administración y orquestación de proyectos industriales, brindando soluciones innovadoras que transformen la manera en que las empresas gestionan sus necesidades industriales.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="values-grid">
        <div v-for="(value, index) in values" 
             :key="index" 
             class="value-item"
             :style="{ animationDelay: `${(index + 2) * 100}ms` }">
          <div class="value-icon">
            <i :class="['fas', value.icon]"></i>
          </div>
          <h4>{{ value.title }}</h4>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MissionVision',
  data() {
    return {
      values: [
        {
          icon: 'fa-gem',
          title: 'Excelencia',
          description: 'Buscamos la perfección en cada detalle de nuestro trabajo.'
        },
        {
          icon: 'fa-handshake',
          title: 'Integridad',
          description: 'Actuamos con honestidad y transparencia en todo momento.'
        },
        {
          icon: 'fa-lightbulb',
          title: 'Innovación',
          description: 'Constantemente buscamos nuevas formas de mejorar.'
        },
        {
          icon: 'fa-users',
          title: 'Colaboración',
          description: 'Trabajamos juntos para alcanzar objetivos comunes.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.mission-vision {
  padding: 6rem 0;
  background: white;
  position: relative;
  overflow: hidden;
}

.section-header {
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--content-dark);
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.125rem;
  color: var(--content-gray);
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 4rem;
}

.mission-card,
.vision-card {
  perspective: 1000px;
  height: 400px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.mission-card:hover .card-inner,
.vision-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.card-front {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card-back {
  background: var(--content-primary);
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.card-back p {
  font-size: 1.125rem;
  line-height: 1.7;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(var(--content-primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.icon-wrapper i {
  font-size: 2rem;
  color: var(--content-primary);
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--content-dark);
  margin-bottom: 1rem;
}

.hover-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--content-gray);
  font-size: 0.875rem;
  opacity: 0.7;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.value-item {
  text-align: center;
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.value-icon {
  width: 60px;
  height: 60px;
  background: rgba(var(--content-primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
}

.value-item:hover .value-icon {
  background: var(--content-primary);
}

.value-icon i {
  font-size: 1.5rem;
  color: var(--content-primary);
  transition: all 0.3s ease;
}

.value-item:hover .value-icon i {
  color: white;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-dark);
  margin-bottom: 0.5rem;
}

.value-item p {
  font-size: 0.875rem;
  color: var(--content-gray);
  line-height: 1.6;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mission-card,
  .vision-card {
    height: 350px;
  }

  .title {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mission-vision {
    padding: 4rem 0;
  }
}
</style>
