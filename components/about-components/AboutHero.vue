<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Sobre Nosotros</h1>
      <p class="subtitle">Orquestando el Futuro Industrial</p>
      <div class="hero-decoration"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #4B6E8C 0%, #333333 100%);
  color: #F5F5F5;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.8rem;
  opacity: 0.9;
  position: relative;
  display: inline-block;
}

.subtitle::after {
  content: '';
  position: absolute;
  width: 40%;
  height: 3px;
  background: #FFD700;
  bottom: -10px;
  left: 30%;
}

.hero-decoration {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid #FFD700;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 20s linear infinite;
}

.hero-decoration::after {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  border: 2px solid rgba(75, 110, 140, 0.3);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
  }
}
</style>
