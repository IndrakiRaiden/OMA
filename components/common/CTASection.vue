<template>
  <section class="cta-section">
    <div class="cta-background">
      <div class="background-shape shape-1"></div>
      <div class="background-shape shape-2"></div>
      <div class="background-shape shape-3"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="cta-content">
        <h2 class="cta-title">
          {{ title }}
        </h2>
        <p class="cta-description">
          {{ description }}
        </p>
        <div class="cta-buttons">
          <a @click.prevent="navigateTo(primaryButton.href)" :href="primaryButton.href" class="btn-primary">
            <span class="btn-content">
              <span>{{ primaryButton.text }}</span>
              <i :class="primaryButton.icon"></i>
            </span>
            <span class="btn-background"></span>
          </a>
          <a @click.prevent="navigateTo(secondaryButton.href)" :href="secondaryButton.href" class="btn-secondary">
            <span class="btn-content">
              <span>{{ secondaryButton.text }}</span>
              <i :class="secondaryButton.icon"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection',
  props: {
    title: {
      type: String,
      default: '¿Listo para empezar tu proyecto?'
    },
    description: {
      type: String,
      default: 'Contáctanos hoy mismo y descubre cómo podemos ayudarte a llevar tu idea a la realidad.'
    },
    primaryButton: {
      type: Object,
      default: () => ({
        text: 'Contactar ahora',
        href: '/contact',
        icon: 'fas fa-arrow-right'
      })
    },
    secondaryButton: {
      type: Object,
      default: () => ({
        text: 'Solicitar cotización',
        href: '/cotiza',
        icon: 'fas fa-file-invoice-dollar'
      })
    },
    theme: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'gradient'].includes(value)
    }
  },
  methods: {
    navigateTo(url) {
      // Add a class to trigger the fade-out animation
      document.body.classList.add('page-transitioning');
      
      // Wait for the animation to complete before navigating
      setTimeout(() => {
        window.location.href = url;
      }, 300); // Match this with the CSS transition duration
    }
  },
  computed: {
    sectionClasses() {
      return {
        'theme-primary': this.theme === 'primary',
        'theme-secondary': this.theme === 'secondary',
        'theme-gradient': this.theme === 'gradient'
      }
    }
  }
}
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/imacomps/6.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
}

.cta-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(0, 32, 96, 0.5) 0%,
    rgba(0, 32, 96, 0.7) 40%,
    rgba(255, 102, 0, 0.4) 60%,
    rgba(0, 32, 96, 0.85) 100%
  ), linear-gradient(
    165deg,
    var(--content-primary) 0%,
    var(--content-secondary) 100%
  );
  opacity: 0.7;
  pointer-events: none;
  z-index: 1;
}

.cta-section.theme-primary::after {
  background: radial-gradient(
    circle at center,
    rgba(0, 32, 96, 0.5) 0%,
    rgba(0, 32, 96, 0.7) 40%,
    rgba(255, 102, 0, 0.4) 60%,
    rgba(0, 32, 96, 0.85) 100%
  ), var(--content-primary);
}

.cta-section.theme-secondary::after {
  background: radial-gradient(
    circle at center,
    rgba(0, 32, 96, 0.5) 0%,
    rgba(0, 32, 96, 0.7) 40%,
    rgba(255, 102, 0, 0.4) 60%,
    rgba(0, 32, 96, 0.85) 100%
  ), var(--content-secondary);
}

.cta-background {
  position: relative;
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  animation: slideDown 0.8s ease-out forwards;
}

.cta-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeIn 0.8s ease-out forwards 0.3s;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation: slideUp 0.8s ease-out forwards 0.5s;
}

.btn-primary, .btn-secondary {
  position: relative;
  padding: 1rem 2.5rem;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  overflow: hidden;
  min-width: 220px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: var(--content-primary);
}

.btn-secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  white-space: nowrap;
}

.btn-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, var(--content-primary), var(--content-secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.btn-primary:hover .btn-background {
  opacity: 0.1;
}

.btn-secondary:hover {
  background: white;
  color: var(--content-primary);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.background-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation: float 20s infinite ease-in-out;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  animation: float 15s infinite ease-in-out reverse;
}

.shape-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 10s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(50px, -30px) rotate(5deg);
  }
  50% {
    transform: translate(20px, 50px) rotate(-5deg);
  }
  75% {
    transform: translate(-40px, 20px) rotate(3deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.2;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 0;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    min-width: unset;
    display: flex;
    justify-content: center;
    padding: 0.875rem 2rem;
  }

  .background-shape {
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .cta-buttons {
    max-width: 100%;
  }
  
  .btn-primary, .btn-secondary {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .btn-content {
    gap: 0.75rem;
  }
}

/* Page Transition Animation */
.page-transitioning {
  animation: fadeOut 0.3s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
