<template>
  <div>
    <NavBar />
    <main class="servicios-page">
      <ServiciosHero />
      <ServiciosGrid />
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ServiciosHero from '../components/servicios-components/ServiciosHero.vue'
import ServiciosGrid from '../components/servicios-components/ServiciosGrid.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'ServiciosPage',
  components: {
    ServiciosHero,
    ServiciosGrid,
    NavBar,
    Footer
  }
})
</script>

<style scoped>
.servicios-page {
  background-color: #f8fafc;
  overflow: hidden;
  position: relative;
}

.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  color: var(--content-light);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInDown 1.2s ease-out;
}

.hero-subtitle {
  color: var(--content-light);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  animation: slideInUp 1.2s ease-out;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeIn 1.5s ease-out;
}

.primary-btn {
  background: var(--content-secondary);
  color: var(--content-light);
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--content-secondary);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.secondary-btn {
  background: transparent;
  color: var(--content-light);
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  border: 2px solid var(--content-light);
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: var(--content-light);
  color: var(--content-primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Animated background shapes */
.hero-section::before,
.hero-section::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite;
}

.hero-section::before {
  top: -100px;
  right: -100px;
}

.hero-section::after {
  bottom: -100px;
  left: -100px;
  animation-delay: -10s;
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

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem;
  }
  
  .button-group {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-btn,
  .secondary-btn {
    width: 100%;
  }
}
</style>
