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
  background: var(--color-light);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2rem;
  transition: all 0.3s ease;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.industry-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
}

.card-content {
  position: relative;
  z-index: 1;
}

.industry-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-primary);
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.industry-card h3 {
  color: var(--color-dark);
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.ripple {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  animation: ripple-effect 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  pointer-events: none;
}

@keyframes ripple-effect {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 150px;
    height: 150px;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}

.appear {
  animation: appear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
