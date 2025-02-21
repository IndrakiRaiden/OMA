<template>
  <section class="banner">
    <div class="banner-container" :class="{ 'with-buttons': showButtons }">
      <div class="banner-content">
        <h1 class="title">
          {{ title }} 
          <span v-if="highlight" class="highlight">{{ highlight }}</span>
        </h1>
        <p class="subtitle">{{ subtitle }}</p>
        <div v-if="showButtons" class="button-group">
          <button class="primary-btn">
            Contáctanos
            <i class="fas fa-arrow-right"></i>
          </button>
          <button class="secondary-btn">
            Ver Proyectos
            <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div class="decorative-elements">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="pattern-overlay"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  highlight: {
    type: String,
    default: ''
  },
  showButtons: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.banner-container {
  position: relative;
  height: 80vh;
  min-height: 600px;
  width: 100%;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
  margin-top: 64px;
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--content-light);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: var(--content-accent);
  font-weight: 700;
  display: block;
  margin-top: 0.5rem;
}

.subtitle {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--content-light);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.button-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.primary-btn,
.secondary-btn {
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.primary-btn {
  background: var(--content-accent);
  color: var(--content-light);
  border: none;
}

.secondary-btn {
  background: transparent;
  color: var(--content-light);
  border: 2px solid var(--content-light);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.secondary-btn:hover {
  background: var(--content-light);
  color: var(--content-primary);
}

.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: var(--content-light);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: var(--content-accent);
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--content-light) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.05;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .banner-container {
    height: 70vh;
    min-height: 500px;
    padding: 1rem;
  }

  .button-group {
    flex-direction: column;
    gap: 1rem;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-color-scheme: dark) {
  .banner-container {
    background: linear-gradient(135deg, #1a1f2e 0%, #121826 100%);
  }

  .subtitle {
    color: var(--content-light-muted);
  }

  .primary-btn {
    background: var(--content-accent-dark);
  }

  .circle-1 {
    opacity: 0.05;
  }

  .circle-2 {
    background: var(--content-accent-dark);
  }
}
</style>
