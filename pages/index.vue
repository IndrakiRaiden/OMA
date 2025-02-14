<template>
  <div class="home">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="glowing-text">OMA INDUSTRIAL SOLUTIONS</h1>
        <p class="fade-in">Transformando la industria con tecnología de vanguardia</p>
        <button class="primary-btn hover-effect">CONTACT US</button>
      </div>
      <div class="geometric-shapes">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions">
      <div class="section-header">
        <h2>SOLUTIONS · SOLUTIONS · PROJECT MANAGEMENT</h2>
      </div>
      <div class="service-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-circle">
            <div class="service-icon">{{ service.icon }}</div>
            <div class="circle-overlay"></div>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <div class="card-footer">
            <span class="project-code">Project {{ index + 1 }}</span>
            <button class="secondary-btn">View More</button>
          </div>
        </div>
      </div>
    </section>

    <main>
      <OmaInfo />
      <Industries />
    </main>
    
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import OmaInfo from '~/components/index-components/OmaInfo.vue'
import Industries from '~/components/index-components/Industries.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    Footer,
    OmaInfo,
    Industries
  },
  data() {
    return {
      services: [
        {
          icon: '🎯',
          title: 'CNC LASE PERROPEL',
          description: 'Precisión láser avanzada para perfiles industriales con tecnología de última generación.'
        },
        {
          icon: '⚡',
          title: 'CNC LASER CUTTING',
          description: 'Corte láser de alta precisión para materiales industriales con acabados perfectos.'
        },
        {
          icon: '🔄',
          title: 'PROJECT MANAGEMENT',
          description: 'Gestión integral de proyectos industriales con metodologías ágiles y eficientes.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  min-height: 100vh;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(45deg, var(--color-primary), var(--color-light));
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(75, 110, 140, 0.05), rgba(245, 166, 35, 0.05));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.glowing-text {
  font-size: 4rem;
  font-weight: bold;
  color: var(--color-secondary);
  text-shadow: 0 0 10px rgba(75, 110, 140, 0.3),
               0 0 20px rgba(75, 110, 140, 0.2),
               0 0 30px rgba(75, 110, 140, 0.1);
  animation: glow 2s ease-in-out infinite alternate;
}

.fade-in {
  font-size: 1.5rem;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  margin: 2rem 0;
  color: var(--color-gray);
}

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.shape {
  position: absolute;
  border: 2px solid rgba(75, 110, 140, 0.2);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.shape:nth-child(1) {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
}

.shape:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: 30%;
  right: 15%;
  animation-direction: reverse;
}

.shape:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: 10%;
  left: 30%;
  animation-duration: 15s;
}

.solutions {
  padding: 4rem 2rem;
  background: var(--color-primary);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-secondary);
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: var(--color-light);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(75, 110, 140, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(75, 110, 140, 0.1);
}

.service-circle {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-secondary), var(--color-accent));
  overflow: hidden;
}

.service-icon {
  font-size: 2.5rem;
  z-index: 2;
  color: var(--color-light);
}

.circle-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.service-card:hover .circle-overlay {
  width: 120%;
  height: 120%;
}

.service-card h3 {
  color: var(--color-secondary);
  margin: 1rem 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.service-card p {
  color: var(--color-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(75, 110, 140, 0.1);
}

.project-code {
  color: var(--color-gray);
  font-size: 0.8rem;
}

.primary-btn {
  background: linear-gradient(45deg, var(--color-secondary), var(--color-accent));
  color: var(--color-light);
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.primary-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
}

.primary-btn:hover::after {
  transform: translateX(50%);
  transition: transform 0.6s ease;
}

.secondary-btn {
  background: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: var(--color-secondary);
  color: var(--color-light);
}

main {
  position: relative;
  z-index: 1;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(75, 110, 140, 0.3),
                 0 0 20px rgba(75, 110, 140, 0.2),
                 0 0 30px rgba(75, 110, 140, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(75, 110, 140, 0.4),
                 0 0 30px rgba(75, 110, 140, 0.3),
                 0 0 40px rgba(75, 110, 140, 0.2);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .glowing-text {
    font-size: 2.5rem;
  }
  
  .fade-in {
    font-size: 1.2rem;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
