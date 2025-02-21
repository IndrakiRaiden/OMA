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
      
      <MissionVision />
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
import MissionVision from '../components/about-components/MissionVision.vue'
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
    MissionVision,
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
  background: var(--background-light);
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

/* Decorative shapes */
.about-page::before,
.about-page::after {
  content: '';
  position: fixed;
  background: linear-gradient(135deg,
    rgba(var(--content-primary-rgb), 0.1),
    rgba(var(--content-secondary-rgb), 0.1)
  );
  opacity: 0.1;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
}

.about-page::before {
  width: 50vw;
  height: 50vw;
  top: -25vw;
  left: -25vw;
  animation: floatShape1 20s infinite ease-in-out;
}

.about-page::after {
  width: 40vw;
  height: 40vw;
  bottom: -20vw;
  right: -20vw;
  animation: floatShape2 25s infinite ease-in-out;
}

@keyframes floatShape1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(10vw, 5vw) rotate(60deg);
  }
}

@keyframes floatShape2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-10vw, -5vw) rotate(-60deg);
  }
}
</style>
