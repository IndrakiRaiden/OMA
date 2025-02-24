 <template>
  <div>
    <NavBar />
    <main class="about-page">
      <BannerV1 
        title="Sobre Nosotros" 
        subtitle="Innovación y excelencia en manufactura CNC"
        :buttons="[
          { text: 'Nuestra Historia', href: '#historia', class: 'primary-btn' },
          { text: 'Contáctanos', href: '/contact', class: 'secondary-btn' }
        ]"
      />
      
      <section class="intro-frames">
        <div class="container mx-auto px-4">
          <div class="section-header text-center mb-12">
            <h2 class="section-title">¿Por qué elegirnos?</h2>
            <p class="section-subtitle">Descubre cómo nuestra experiencia y compromiso con la innovación nos distinguen en la industria manufacturera.</p>
          </div>
          <div class="frames-grid">
            <div class="frame">
              <div class="frame-content">
                <div class="icon-container">
                  <i class="fas fa-cogs"></i>
                </div>
                <h2>Experiencia y Calidad</h2>
                <p>Más de una década de experiencia en manufactura CNC y gestión de proyectos industriales.</p>
              </div>
            </div>
            <div class="frame">
              <div class="frame-content">
                <div class="icon-container">
                  <i class="fas fa-handshake"></i>
                </div>
                <h2>Compromiso Total</h2>
                <p>Nos dedicamos a superar las expectativas de nuestros clientes con soluciones personalizadas y atención detallada.</p>
              </div>
            </div>
            <div class="frame">
              <div class="frame-content">
                <div class="icon-container">
                  <i class="fas fa-microchip"></i>
                </div>
                <h2>Innovación Constante</h2>
                <p>Adoptamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section-divider">
        <div class="container mx-auto px-6">
          <div class="divider-content">
            <div class="divider-stat">
              <div class="divider-icon">
                <i class="fas fa-ruler-combined"></i>
              </div>
              <span class="divider-number">0.01mm</span>
              <span class="divider-label">Precisión</span>
            </div>
            <div class="divider-separator"></div>
            <div class="divider-stat featured">
              <div class="divider-icon">
                <i class="fas fa-clock"></i>
              </div>
              <span class="divider-number">24/7</span>
              <span class="divider-label">Operación</span>
            </div>
            <div class="divider-separator"></div>
            <div class="divider-stat">
              <div class="divider-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <span class="divider-number">100%</span>
              <span class="divider-label">Calidad</span>
            </div>
          </div>
        </div>
      </section>
      
      <CompanyStats />
      <TimelineSection id="historia" />
      <TeamSection />
      <CTASection />
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CompanyStats from '../components/about-components/CompanyStats.vue'
import TimelineSection from '../components/about-components/TimelineSection.vue'
import TeamSection from '../components/about-components/TeamSection.vue'
import CTASection from '../components/services-components/CTASection.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BannerV1 from '../components/BannerV1.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    CompanyStats,
    TimelineSection,
    TeamSection,
    CTASection,
    NavBar,
    Footer,
    BannerV1
  }
})
</script>

<style scoped>
.about-page {
  position: relative;
  overflow: hidden;
}

/* Background Shape */
.about-page::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80vw;
  height: 120vw;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  transform: rotate(-45deg);
  opacity: 0.05;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
  animation: morphBackground 15s ease-in-out infinite;
}

@keyframes morphBackground {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

.intro-frames {
  padding: 4rem 0;
  position: relative;
  z-index: 1;
}

.frames-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.frame {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #edf2f7;
}

.frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.frame-content {
  padding: 3rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container {
  width: 80px;
  height: 80px;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.icon-container i {
  font-size: 2rem;
  color: white;
}

.frame h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--content-primary);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.frame p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--content-dark);
  transition: color 0.3s ease;
}

/* Hover Effects */
.frame:hover {
  transform: translateY(-5px);
}

.frame:hover::before {
  opacity: 1;
}

.frame:hover .icon-container {
  background: white;
}

.frame:hover .icon-container i {
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.frame:hover h2,
.frame:hover p {
  color: white;
}

/* Responsive */
@media (max-width: 1024px) {
  .frames-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .frames-grid {
    grid-template-columns: 1fr;
  }

  .frame-content {
    padding: 2rem;
  }

  .frame h2 {
    font-size: 1.75rem;
  }

  .about-page::before {
    width: 120vw;
    height: 120vw;
  }
}

.section-divider {
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(var(--content-primary-rgb), 0.02) 0%,
    rgba(var(--content-secondary-rgb), 0.02) 100%
  );
  margin-bottom: -3rem;
}

.divider-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.divider-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.divider-stat:hover {
  transform: translateY(-5px);
}

.divider-stat.featured {
  transform: translateY(-5px);
}

.divider-stat.featured:hover {
  transform: translateY(-8px);
}

.divider-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  transform: rotate(-10deg);
  transition: transform 0.3s ease;
}

.divider-stat:hover .divider-icon {
  transform: rotate(0deg);
}

.divider-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--content-primary);
  font-family: 'JetBrains Mono', monospace;
}

.divider-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
}

.divider-separator {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, 
    transparent,
    rgba(var(--content-primary-rgb), 0.2),
    transparent
  );
}

.divider-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(var(--accent-rgb), 0.03) 0%,
    transparent 70%
  );
}

@media (max-width: 768px) {
  .divider-content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .divider-separator {
    width: 40px;
    height: 1px;
  }

  .section-divider {
    padding: 2.5rem 0;
    margin-bottom: -2rem;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--content-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--content-secondary);
  max-width: 2xl;
  margin: 0 auto;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>
