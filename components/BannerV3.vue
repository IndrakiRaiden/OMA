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
  background: url('../public/images/Banners/8.jpg') center/cover no-repeat;
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
  background: linear-gradient(120deg, var(--content-primary), var(--content-secondary));
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.8rem;
  font-weight: 600;
  transition: all 0.25s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1);
}

.primary-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.btn-icon {
  margin-left: 0.75rem;
  font-size: 0.85rem;
  transition: transform 0.3s ease;
}

.primary-btn:hover .btn-icon {
  transform: translateX(3px);
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
  bottom: -100px;
  right: -55px;
  width: 350px;
  height: 350px;
  animation: float 15s infinite ease-in-out reverse, rotateShape 35s infinite linear reverse;
}

.shape-3 {
  top: 30%;
  right: 10%;
  width: 200px;
  height: 200px;
  animation: float 12s infinite ease-in-out, rotateShape 25s infinite linear;
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(15px, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes rotateShape {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
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

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
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

@media (max-width: 768px) {
  .hero-section {
    padding: 5rem 1rem 1rem 1rem;
    min-height: 45vh;
  }
  
  .button-group {
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .button-group a {
    width: 100%;
    justify-content: center;
  }
}
</style>
