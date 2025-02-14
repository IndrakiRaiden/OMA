<template>
  <section class="oma-info">
    <div class="section-header">
      <h2>NOSOTROS · US</h2>
    </div>
    <div class="info-grid">
      <div class="info-card" v-for="(info, index) in infoCards" :key="index"
           :class="{ 'appear': true }"
           :style="{ animationDelay: `${index * 0.2}s` }">
        <div class="glow-effect"></div>
        <div class="card-content">
          <div class="info-icon" @click="createRipple($event)" :style="{ '--line-color': info.lineColor }">{{ info.icon }}</div>
          <h3>{{ info.title }}</h3>
          <p>{{ info.description }}</p>
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

<script>
export default {
  name: 'OmaInfo',
  data() {
    return {
      infoCards: [],
      usedColors: []
    }
  },
  created() {
    const cards = [
      {
        icon: '🌎',
        title: 'Global',
        description: 'América · Europa · Asia'
      },
      {
        icon: '⚡',
        title: 'Innovación',
        description: 'Tecnología de Vanguardia'
      },
      {
        icon: '🚀',
        title: 'Express',
        description: 'Logística Internacional'
      }
    ];

    // Asegurar distribución 50/50
    const colors = ['#4B6E8C', '#FFD700'];
    const totalCards = cards.length;
    const halfPoint = Math.ceil(totalCards / 2);
    
    // Crear array con distribución equitativa
    let availableColors = [
      ...Array(halfPoint).fill(colors[0]),
      ...Array(totalCards - halfPoint).fill(colors[1])
    ];

    // Mezclar el array de colores
    for (let i = availableColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableColors[i], availableColors[j]] = [availableColors[j], availableColors[i]];
    }

    // Asignar colores a las tarjetas
    this.infoCards = cards.map((card, index) => ({
      ...card,
      lineColor: availableColors[index]
    }));
  },
  methods: {
    createRipple(event) {
      const icon = event.currentTarget;
      const ripple = document.createElement('div');
      const colors = ['#4B6E8C', '#FFD700'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      ripple.className = 'ripple';
      ripple.style.borderColor = randomColor;
      
      icon.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    }
  }
}
</script>

<style scoped>
.oma-info {
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.oma-info::before, .oma-info::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

.oma-info::before {
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(64, 128, 255, 0.3),
    transparent
  );
  animation: shimmer 2.5s infinite;
}

.oma-info::after {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(64, 128, 255, 0.2);
  border-radius: 50%;
  top: 10%;
  right: -50px;
  animation: rotate 20s linear infinite;
}

.corner-decoration {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(64, 128, 255, 0.2);
  pointer-events: none;
}

.top-left {
  top: 10px;
  left: 10px;
  border-right: none;
  border-bottom: none;
  animation: pulse 2s ease-in-out infinite;
}

.top-right {
  top: 10px;
  right: 10px;
  border-left: none;
  border-bottom: none;
  animation: pulse 2s ease-in-out infinite 0.5s;
}

.bottom-left {
  bottom: 10px;
  left: 10px;
  border-right: none;
  border-top: none;
  animation: pulse 2s ease-in-out infinite 1s;
}

.bottom-right {
  bottom: 10px;
  right: 10px;
  border-left: none;
  border-top: none;
  animation: pulse 2s ease-in-out infinite 1.5s;
}

.info-icon {
  position: relative;
  cursor: pointer;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-icon::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--line-color);
  transform: translateX(-50%);
  transition: width 0.3s ease;
  pointer-events: none;
}

.info-icon:hover::after {
  width: 80px;
}

.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border: 2px solid;
  border-radius: 50%;
  animation: rippleEffect 1s ease-out;
}

@keyframes rippleEffect {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  padding: 0 1rem;
}

.info-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-card.appear {
  animation: cardAppear 0.6s ease forwards;
}

.glow-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 15%,
    transparent 50%,
    rgba(255, 255, 255, 0.05) 85%,
    rgba(255, 255, 255, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.info-card h3 {
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.info-card p {
  color: var(--color-secondary);
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.info-card:hover {
  transform: translateY(-10px) scale(1.02);
}

.info-card:hover .glow-effect {
  opacity: 1;
}

.info-card:hover .card-border {
  opacity: 1;
}

.info-card:hover .info-icon {
  transform: scale(1.2) rotate(5deg);
  animation: iconPulse 1.5s ease-in-out infinite;
}

@keyframes cardAppear {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes iconPulse {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.3) rotate(5deg);
  }
  100% {
    transform: scale(1.2);
  }
}

@media (max-width: 768px) {
  .info-grid {
    gap: 2rem;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
}
</style>
