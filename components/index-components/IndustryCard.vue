<template>
  <div class="industry-card" 
       :class="{ 'appear': true }" 
       :style="{ 
         animationDelay: `${delay}s`,
         '--line-color': lineColor 
       }">
    <div class="glow-effect"></div>
    <div class="card-content">
      <div class="industry-icon" @click="createRipple">
        <div class="icon-background"></div>
        <component :is="icon" :size="32" :stroke-width="2" :style="{ color: lineColor }" />
      </div>
      <h3>{{ title }}</h3>
    </div>
    <div class="card-border"></div>
    <div class="corner-decoration top-left"></div>
    <div class="corner-decoration top-right"></div>
    <div class="corner-decoration bottom-left"></div>
    <div class="corner-decoration bottom-right"></div>
  </div>
</template>

<script>
export default {
  name: 'IndustryCard',
  props: {
    icon: {
      type: [String, Object],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lineColor: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    delay() {
      return this.index * 0.15
    }
  },
  methods: {
    createRipple(event) {
      const icon = event.currentTarget;
      const ripple = document.createElement('div');
      
      ripple.className = 'ripple';
      ripple.style.borderColor = this.lineColor;
      
      icon.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    }
  }
}
</script>

<style scoped>
.industry-card {
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  backdrop-filter: blur(10px);
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

.industry-card:hover {
  transform: translateY(-5px);
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

.industry-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  -webkit-mask: 
    linear-gradient(#000 0 0) content-box, 
    linear-gradient(#000 0 0);
  mask: 
    linear-gradient(#000 0 0) content-box, 
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.industry-card:hover::before {
  opacity: 1;
}

.industry-card.appear {
  animation: fadeInUp 0.6s forwards;
}

.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.industry-icon {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-background {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.industry-card:hover .industry-icon {
  transform: translateY(-5px) scale(1.1);
}

.industry-card:hover .icon-background {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--line-color);
  box-shadow: 0 0 20px rgba(var(--line-color), 0.2);
}

h3 {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
  letter-spacing: 0.5px;
  transition: transform 0.3s ease;
}

.industry-card:hover h3 {
  transform: scale(1.05);
}

.corner-decoration {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid;
  border-color: var(--line-color);
  opacity: 0.3;
  transition: all 0.3s ease;
}

.industry-card:hover .corner-decoration {
  opacity: 1;
  width: 18px;
  height: 18px;
}

.top-left {
  top: 8px;
  left: 8px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 8px;
  right: 8px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 8px;
  left: 8px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 8px;
  right: 8px;
  border-left: none;
  border-top: none;
}

.ripple {
  position: absolute;
  border: 2px solid var(--line-color);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: rippleEffect 1s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

@keyframes rippleEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
