<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="overlay"></div>
      <div class="pattern"></div>
    </div>
    <div class="content-wrapper">
      <h1 class="title">
        <span class="highlight">Soluciones</span> Industriales
      </h1>
      <p class="subtitle">Servicios especializados en manufactura CNC y automatización</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiciosHero'
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-secondary) 0%, #2C4C6B 100%);
  opacity: 0.95;
}

.pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.15) 2%, transparent 0%);
  background-size: 100px 100px;
  animation: patternMove 20s linear infinite;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.title {
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.highlight {
  background: linear-gradient(120deg, var(--color-accent) 0%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.4rem);
  opacity: 0;
  animation: fadeInUp 1s ease 0.3s forwards;
  margin-bottom: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes patternMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 40vh;
    min-height: 300px;
  }

  .content-wrapper {
    padding: 0 1.5rem;
  }
}

@media (max-height: 600px) {
  .hero-section {
    height: auto;
    min-height: 250px;
    padding: 3rem 0;
  }
}
</style>
