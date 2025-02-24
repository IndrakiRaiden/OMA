<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
      <div class="button-group">
        <a v-for="(button, index) in buttons" 
           :key="index"
           :href="button.href" 
           :class="button.class">
          {{ button.text }}
          <span class="btn-icon">
            <i :class="button.class.includes('primary') ? 'fas fa-arrow-right' : 'fas fa-external-link-alt'"></i>
          </span>
        </a>
      </div>
    </div>
    <!-- Additional decorative elements -->
    <div class="geometric-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
    <div class="gradient-overlay"></div>
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
  buttons: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  overflow: hidden;
  background: url('../public/images/Banners/1.jpg') center/cover no-repeat;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 400% 400%;
  background-image: linear-gradient(
    165deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(42, 67, 101, 0.7) 25%,
    rgba(0, 0, 0, 0.7) 55%,
    rgba(26, 54, 93, 0.7) 85%,
    rgba(0, 0, 0, 0.7) 100%
  );
  animation: gradientAnimation 15s ease infinite;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  animation: fadeInUp 1s ease-out;
  padding: 0 1rem;
}

.hero-title {
  color: var(--content-light);
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInDown 1.2s ease-out;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  color: var(--content-light);
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
  animation: slideInUp 1.2s ease-out;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.button-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation: fadeIn 1.5s ease-out;
}

.primary-btn,
.secondary-btn {
  padding: 0.85rem 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 1;
}

.btn-icon {
  display: inline-flex;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.primary-btn {
  background: var(--content-secondary);
  color: var(--content-light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--content-primary), #2a4365);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  z-index: -1;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(13, 28, 51, 0.3);
}

.primary-btn:hover .btn-icon {
  transform: translateX(4px);
}

.secondary-btn {
  background: transparent;
  color: var(--content-light);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 0;
  padding: calc(0.85rem - 1px) calc(2rem - 1px);
}

.secondary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), #e2e8f0);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
  z-index: -1;
}

.secondary-btn:hover {
  color: var(--content-primary);
}

.secondary-btn:hover::before {
  transform: scaleY(1);
  transform-origin: top;
}

.secondary-btn:hover .btn-icon {
  transform: translate(3px, -3px);
}

/* Enhanced background elements */
.hero-section::before,
.hero-section::after {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(45deg, 
    rgba(226, 232, 240, 0.08),
    rgba(44, 82, 130, 0.08)
  );
  animation: float 20s infinite;
}

.hero-section::before {
  top: -150px;
  right: -100px;
  animation-delay: -5s;
}

.hero-section::after {
  bottom: -150px;
  left: -100px;
  animation-delay: -10s;
}

.geometric-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  background: linear-gradient(135deg, 
    rgba(226, 232, 240, 0.05),
    rgba(44, 82, 130, 0.05)
  );
  backdrop-filter: blur(3px);
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  transform: rotate(45deg);
  animation: float 15s infinite, pulse 8s ease-in-out infinite;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  border-radius: 30%;
  animation: float 18s infinite reverse, pulse 8s ease-in-out infinite 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  border-radius: 24%;
  animation: float 20s infinite, pulse 8s ease-in-out infinite 4s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(15px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(0, -25px) rotate(-5deg);
  }
  75% {
    transform: translate(-15px, -15px) rotate(3deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
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

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.1;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1rem;
  }

  .button-group {
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
  }

  .primary-btn,
  .secondary-btn {
    justify-content: center;
  }

  .geometric-shapes {
    display: none;
  }
}
</style>
