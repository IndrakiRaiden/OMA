<template>
  <div class="industry-card">
    <div class="card-content">
      <div class="icon-wrapper">
        <div class="icon-container">
          <component :is="icon" 
                    :size="32" 
                    :stroke-width="2"
                    class="icon" />
        </div>
        <div class="icon-ring"></div>
      </div>
      
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      
      <div class="card-footer">
        <a href="#" class="discover-more">
          <span>Descubre más</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="card-background"></div>
    <div class="card-glow"></div>
    <div class="corner-accent top-left"></div>
    <div class="corner-accent top-right"></div>
    <div class="corner-accent bottom-left"></div>
    <div class="corner-accent bottom-right"></div>
  </div>
</template>

<style scoped>
.industry-card {
  position: relative;
  height: 100%;
  min-height: 320px;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.industry-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
  z-index: 1;
}

.industry-card:hover {
  transform: translateY(-10px) rotateX(10deg);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-background {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2),
    transparent 70%
  );
  transform: translateZ(-1px);
  transition: opacity 0.5s ease;
  opacity: 0;
}

.industry-card:hover .card-background {
  opacity: 1;
  animation: moveBackground 8s infinite ease-in-out;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.2),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: inherit;
  z-index: 1;
}

.industry-card:hover .card-glow {
  opacity: 0.8;
  animation: moveGlow 6s infinite ease-in-out;
}

@keyframes moveBackground {
  0% {
    transform: translate(-50%, -50%) scale(1.5);
  }
  50% {
    transform: translate(50%, 50%) scale(1.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
  }
}

@keyframes moveGlow {
  0% {
    transform: translate(50%, 50%) scale(1.2);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(50%, 50%) scale(1.2);
  }
}

.icon-wrapper {
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 2rem;
}

.icon-container {
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  border-radius: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.industry-card:hover .icon-container {
  transform: translate(-50%, -50%) scale(1.1) translateZ(30px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.icon-ring {
  position: absolute;
  inset: -5px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.industry-card:hover .icon-ring {
  transform: scale(1.2) rotate(45deg);
  border-color: rgba(255, 255, 255, 0.4);
}

.icon {
  color: white;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.industry-card:hover .icon {
  transform: scale(1.2) rotate(-10deg);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.industry-card:hover .card-title {
  transform: translateZ(20px);
  letter-spacing: 0.5px;
}

.card-description {
  text-align: center;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  flex-grow: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.industry-card:hover .card-description {
  transform: translateZ(15px);
  opacity: 1;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.discover-more {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.discover-more:hover {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.25)
  );
  transform: translateZ(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.discover-more span {
  transition: transform 0.3s ease;
}

.discover-more:hover span {
  transform: translateX(-2px);
}

.discover-more i {
  transition: transform 0.3s ease;
}

.discover-more:hover i {
  transform: translateX(4px);
}

.corner-accent {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-left {
  top: 10px;
  left: 10px;
  border-right: none;
  border-bottom: none;
  border-radius: 8px 0 0 0;
}

.top-right {
  top: 10px;
  right: 10px;
  border-left: none;
  border-bottom: none;
  border-radius: 0 8px 0 0;
}

.bottom-left {
  bottom: 10px;
  left: 10px;
  border-right: none;
  border-top: none;
  border-radius: 0 0 0 8px;
}

.bottom-right {
  bottom: 10px;
  right: 10px;
  border-left: none;
  border-top: none;
  border-radius: 0 0 8px 0;
}

.industry-card:hover .corner-accent {
  border-color: rgba(255, 255, 255, 0.5);
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .industry-card {
    min-height: 280px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
    margin-bottom: 1.5rem;
  }

  .icon-container {
    width: 60px;
    height: 60px;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .corner-accent {
    width: 30px;
    height: 30px;
  }

  .industry-card:hover .corner-accent {
    width: 40px;
    height: 40px;
  }
}
</style>

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
    description: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$el.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeDestroy() {
    this.$el.removeEventListener('mousemove', this.handleMouseMove)
  },
  methods: {
    handleMouseMove(e) {
      const rect = this.$el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      this.$el.style.setProperty('--mouse-x', `${x}%`)
      this.$el.style.setProperty('--mouse-y', `${y}%`)
    }
  }
}
</script>
