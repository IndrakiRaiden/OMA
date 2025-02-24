<template>
  <div>
    <NavBar />
    <main class="about-page">
      <AnimatedBackground />
      <BannerV1 
        title="Sobre Nosotros" 
        subtitle="Innovación y excelencia en manufactura CNC"
        :buttons="[
          { text: 'Nuestra Historia', href: '#historia', class: 'primary-btn' },
          { text: 'Contáctanos', href: '/contact', class: 'secondary-btn' }
        ]"
      />
      
      <IntroFrames />
      <DividerStats />
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
import IntroFrames from '~/components/about-components/IntroFrames.vue'
import DividerStats from '~/components/about-components/DividerStats.vue'
import CompanyStats from '~/components/about-components/CompanyStats.vue'
import TimelineSection from '~/components/about-components/TimelineSection.vue'
import TeamSection from '~/components/about-components/TeamSection.vue'
import CTASection from '~/components/common/CTASection.vue'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import BannerV1 from '~/components/BannerV1.vue'
import AnimatedBackground from '~/components/common/AnimatedBackground.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    IntroFrames,
    DividerStats,
    CompanyStats,
    TimelineSection,
    TeamSection,
    CTASection,
    NavBar,
    Footer,
    BannerV1,
    AnimatedBackground
  }
})
</script>

<style scoped>
.about-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}
</style>