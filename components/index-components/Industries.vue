<template>
  <section class="industries">
    <div class="section-header">
      <h2>INDUSTRIAS · INDUSTRIES</h2>
    </div>
    <div class="industries-grid">
      <div class="industry-card" v-for="(industry, index) in industries" :key="index"
           :class="{ 'appear': true }"
           :style="{ animationDelay: `${index * 0.15}s` }">
        <div class="glow-effect"></div>
        <div class="card-content">
          <div class="industry-icon" @click="createRipple($event)" :style="{ '--line-color': industry.lineColor }">{{ industry.icon }}</div>
          <h3>{{ industry.title }}</h3>
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
  name: 'Industries',
  data() {
    return {
      industries: []
    }
  },
  created() {
    const cards = [
      { icon: '🏭', title: 'Industrial' },
      { icon: '⚡', title: 'Energía' },
      { icon: '🔧', title: 'Manufactura' },
      { icon: '🌊', title: 'Oil & Gas' },
      { icon: '🏗️', title: 'Construcción' },
      { icon: '🚢', title: 'Marítimo' }
    ];

    // Asegurar distribución 50/50
    const colors = ['#4B6E8C', '#FFD700'];
    const totalCards = cards.length;
    const halfPoint = Math.floor(totalCards / 2);
    
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
    this.industries = cards.map((card, index) => ({
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
.industries {
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.industries::before, .industries::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

.industries::before {
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(96, 160, 255, 0.3),
    transparent
  );
  animation: shimmer 2.2s infinite;
}

.industries::after {
  width: 150px;
  height: 150px;
  border: 2px solid rgba(96, 160, 255, 0.2);
  border-radius: 10px;
  bottom: 10%;
  left: -75px;
  animation: floatRotate 25s linear infinite;
}

.corner-decoration {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(96, 160, 255, 0.2);
  pointer-events: none;
}

.top-left {
  top: 8px;
  left: 8px;
  border-right: none;
  border-bottom: none;
  animation: pulse 2s ease-in-out infinite;
}

.top-right {
  top: 8px;
  right: 8px;
  border-left: none;
  border-bottom: none;
  animation: pulse 2s ease-in-out infinite 0.5s;
}

.bottom-left {
  bottom: 8px;
  left: 8px;
  border-right: none;
  border-top: none;
  animation: pulse 2s ease-in-out infinite 1s;
}

.bottom-right {
  bottom: 8px;
  right: 8px;
  border-left: none;
  border-top: none;
  animation: pulse 2s ease-in-out infinite 1.5s;
}

.industry-icon {
  position: relative;
  cursor: pointer;
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
  display: flex;
  justify-content: center;
  align-items: center;
}

.industry-icon::after {
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

.industry-icon:hover::after {
  width: 60px;
}

.industry-card {
  position: relative;
  height: 200px;
  perspective: 1000px;
  opacity: 0;
  cursor: pointer;
}

.industry-card.appear {
  animation: cardAppear 0.6s ease forwards;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
}

.card-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.industry-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 15px rgba(255,255,255,0.3));
  transition: transform 0.3s ease;
}

.industry-card h3 {
  color: var(--color-accent);
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  transition: transform 0.3s ease;
}

.industry-card:hover .card-inner {
  transform: translateY(-10px) scale(1.05);
}

.industry-card:hover .card-shine {
  transform: translateX(100%);
  transition: transform 0.6s;
}

.industry-card:hover .card-gradient {
  opacity: 1;
}

.industry-card:hover .industry-icon {
  transform: scale(1.2);
  animation: iconFloat 3s ease-in-out infinite;
}

.industry-card:hover h3 {
  transform: scale(1.1);
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

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0) scale(1.2);
  }
  50% {
    transform: translateY(-10px) scale(1.3);
  }
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  padding: 0 1rem;
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
    width: 150px;
    height: 150px;
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

@media (max-width: 768px) {
  .industries-grid {
    gap: 1.5rem;
  }
  
  .industry-card {
    height: 180px;
  }
}
</style>
