<template>
  <div class="home">
    <NavBar />
    <Hero />
    <main>
      <Solutions />
      <section class="timeline-section">
        <div class="section-header">
          <span class="subtitle">PROCESO DE PRODUCCIÓN</span>
          <h2>De la idea a la entrega</h2>
          <p>Orquestamos todo el proceso productivo</p>
        </div>
        <div class="timeline-container">
          <div class="timeline">
            <div class="timeline-step" style="--step-index: 1">
              <i class="fas fa-box"></i>
              <span>Materia Prima</span>
            </div>
            <div class="timeline-step" style="--step-index: 2">
              <i class="fas fa-cogs"></i>
              <span>Fabricación</span>
            </div>
            <div class="timeline-step" style="--step-index: 3">
              <i class="fas fa-flask"></i>
              <span>Tratamientos</span>
            </div>
            <div class="timeline-step" style="--step-index: 4">
              <i class="fas fa-paint-roller"></i>
              <span>Acabados</span>
            </div>
            <div class="timeline-step" style="--step-index: 5">
              <i class="fas fa-tools"></i>
              <span>Ensamblaje</span>
            </div>
            <div class="timeline-step" style="--step-index: 6">
              <i class="fas fa-truck"></i>
              <span>Entrega</span>
            </div>
          </div>
        </div>
      </section>
      <section class="benefits">
        <div class="section-header">
          <span class="subtitle">BENEFICIOS</span>
          <h2>¿Por qué elegir OMA?</h2>
        </div>
        <div class="cards-grid">
          <div class="solution-card" style="--card-index: 1">
            <div class="icon-wrapper">
              <i class="fas fa-industry"></i>
            </div>
            <h3>Todo en un solo lugar</h3>
            <p>Fabricación, Acabados, ensamblaje, tratamientos, recubrimientos y entrega sin complicaciones.</p>
          </div>
          <div class="solution-card" style="--card-index: 2">
            <div class="icon-wrapper">
              <i class="fas fa-certificate"></i>
            </div>
            <h3>Calidad garantizada</h3>
            <p>Procesos certificados y precisión en cada pieza.</p>
          </div>
          <div class="solution-card" style="--card-index: 3">
            <div class="icon-wrapper">
              <i class="fas fa-microchip"></i>
            </div>
            <h3>Industria 4.0</h3>
            <p>Tecnología avanzada en manufactura.</p>
          </div>
          <div class="solution-card" style="--card-index: 4">
            <div class="icon-wrapper">
              <i class="fas fa-users"></i>
            </div>
            <h3>Atención personalizada</h3>
            <p>Soluciones adaptadas a cada cliente.</p>
          </div>
        </div>
      </section>
      <Explanation />
      <HowItWorks />
      <Industries />
      <section class="testimonials">
        <div class="section-header">
          <span class="subtitle">TESTIMONIOS</span>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div class="testimonial-carousel">
          <div class="testimonial-card">
            <p class="quote">OMA ha transformado nuestra cadena de producción, simplificando todo el proceso.</p>
            <div class="client-info">
              <h4>Cliente Satisfecho</h4>
              <p>Empresa Industrial</p>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="quote">La calidad y precisión en cada pieza es excepcional.</p>
            <div class="client-info">
              <h4>Cliente Satisfecho 2</h4>
              <p>Industria Automotriz</p>
            </div>
          </div>
        </div>
      </section>
      <section class="final-cta">
        <div class="geometric-shapes">
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <div class="cta-content">
          <h2>Optimiza tu producción con OMA</h2>
          <p>Hablemos sobre tu proyecto</p>
          <button class="primary-btn">Contacta con nosotros</button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import Hero from '~/components/index-components/Hero.vue'
import Solutions from '~/components/index-components/Solutions.vue'
import Explanation from '~/components/index-components/Explanation.vue'
import HowItWorks from '~/components/index-components/HowItWorks.vue'
import Industries from '~/components/index-components/Industries.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    Footer,
    Hero,
    Solutions,
    Explanation,
    HowItWorks,
    Industries
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          quote: "OMA ha transformado nuestra cadena de producción, simplificando todo el proceso.",
          name: "Cliente Satisfecho",
          company: "Empresa Industrial"
        },
        {
          id: 2,
          quote: "La calidad y precisión en cada pieza es excepcional.",
          name: "Cliente Satisfecho 2",
          company: "Industria Automotriz"
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  background-color: var(--content-light);
  color: var(--content-primary);
  min-height: 100vh;
}

main {
  position: relative;
  z-index: 1;
  background-color: var(--content-light);
}

.timeline-section {
  padding: 8rem 2rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.timeline-section .section-header {
  text-align: center;
  margin-bottom: 6rem;
  color: white;
  position: relative;
  z-index: 2;
}

.timeline-section .subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
  animation: fadeInDown 1s ease;
}

.timeline-section h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease 0.2s both;
}

.timeline-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeIn 1s ease 0.4s both;
}

.timeline-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%);
}

.timeline::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background: white;
  transform: translateY(-50%) scaleX(0);
  transform-origin: left;
  animation: progressLine 3s ease-out forwards;
}

.timeline-step {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  z-index: 2;
  min-width: 160px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease both;
  animation-delay: calc(var(--step-index) * 0.2s);
}

.timeline-step:hover {
  transform: translateY(-15px);
  background: rgba(255, 255, 255, 0.2);
}

.timeline-step i {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  display: block;
  transition: all 0.3s ease;
}

.timeline-step:hover i {
  transform: scale(1.2);
}

.timeline-step span {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  transition: all 0.3s ease;
}

.benefits {
  padding: 8rem 2rem;
  background: var(--content-light);
  position: relative;
  overflow: hidden;
}

.benefits .section-header {
  text-align: center;
  margin-bottom: 6rem;
}

.benefits .subtitle {
  color: var(--content-secondary);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
  animation: fadeInDown 1s ease;
}

.benefits h2 {
  color: var(--content-primary);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease 0.2s both;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.solution-card {
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease both;
  animation-delay: calc(var(--card-index) * 0.2s);
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 1;
}

.solution-card:hover::before {
  opacity: 0.05;
}

.solution-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.solution-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(10deg);
}

.icon-wrapper i {
  font-size: 2.5rem;
  color: white;
  transition: all 0.3s ease;
}

.solution-card:hover .icon-wrapper i {
  transform: scale(1.1);
}

.solution-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--content-primary);
  position: relative;
  z-index: 2;
}

.solution-card p {
  color: var(--content-dark);
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.testimonials {
  padding: 6rem 2rem;
  background: var(--content-light);
  position: relative;
}

.testimonials .section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials .section-header .subtitle {
  color: var(--content-secondary);
  font-weight: 600;
}

.testimonials .section-header h2 {
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.testimonial-carousel {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  scrollbar-width: none;
}

.testimonial-carousel::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  min-width: 300px;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.quote {
  color: var(--content-primary);
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.client-info h4 {
  color: var(--content-secondary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.client-info p {
  color: var(--content-dark);
  opacity: 0.8;
}

.final-cta {
  position: relative;
  padding: 8rem 2rem;
  background: white;
  overflow: hidden;
  text-align: center;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-content p {
  color: var(--content-dark);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-content .primary-btn {
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  color: white;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-content .primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.1;
}

.shape {
  position: absolute;
  border: 2px solid var(--content-primary);
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

@keyframes progressLine {
  0% {
    transform: translateY(-50%) scaleX(0);
  }
  100% {
    transform: translateY(-50%) scaleX(1);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  
  .timeline::before,
  .timeline::after {
    width: 3px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .timeline::after {
    transform: translateX(-50%) scaleY(0);
    animation: progressLineVertical 3s ease-out forwards;
  }
  
  .timeline-step {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .solution-card {
    padding: 2rem;
  }
}

@keyframes progressLineVertical {
  0% {
    transform: translateX(-50%) scaleY(0);
  }
  100% {
    transform: translateX(-50%) scaleY(1);
  }
}
</style>