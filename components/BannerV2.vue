<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
      <div class="button-group">
        <template v-for="(button, index) in buttons" :key="index">
          <!-- Use NuxtLink for internal navigation -->
          <NuxtLink 
            v-if="button.to" 
            :to="button.to" 
            :class="button.class">
            {{ button.text }}
            <span class="btn-icon">
              <i :class="button.class.includes('primary') ? 'fas fa-arrow-right' : 'fas fa-external-link-alt'"></i>
            </span>
          </NuxtLink>
          
          <!-- Use regular anchor for hash links or external links -->
          <a v-else
             :href="button.href" 
             :class="button.class">
            {{ button.text }}
            <span class="btn-icon">
              <i :class="button.class.includes('primary') ? 'fas fa-arrow-right' : 'fas fa-external-link-alt'"></i>
            </span>
          </a>
        </template>
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
  padding: 6rem 2rem 2rem 2rem;
  overflow: hidden;
  background: url('../public/images/Banners/7.jpg') center/cover no-repeat;
  margin-top: 0;
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  animation: slideInUp 1.4s ease-out;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  animation: fadeIn 1.8s ease-out;
  flex-wrap: wrap;
}

.button-group a {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.primary-btn {
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 10px 30px rgba(0, 125, 255, 0.3);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 125, 255, 0.4);
}

.secondary-btn {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.btn-icon {
  margin-left: 0.75rem;
  font-size: 0.85rem;
  transition: transform 0.3s ease;
}

.primary-btn:hover .btn-icon,
.secondary-btn:hover .btn-icon {
  transform: translateX(3px);
}

/* Geometric shapes */
.geometric-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.shape-1 {
  top: -40px;
  left: -40px;
  width: 250px;
  height: 250px;
  animation: float 18s infinite ease-in-out, rotateShape 30s infinite linear;
}

.shape-2 {
  top: 150px;
  right: -60px;
  width: 200px;
  height: 200px;
  animation: float 14s infinite ease-in-out reverse, rotateShape 25s infinite linear reverse;
}

.shape-3 {
  bottom: -50px;
  left: 40%;
  width: 300px;
  height: 300px;
  animation: float 16s infinite ease-in-out, rotateShape 35s infinite linear;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotateShape {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 5rem 1rem 2rem 1rem;
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .button-group a {
    width: 100%;
    justify-content: center;
  }
  
  .shape {
    opacity: 0.4;
  }
}
</style>
