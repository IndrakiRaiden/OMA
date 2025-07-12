<template>
  <div>
    <main class="about-page">
      <AnimatedBackground />
      <BannerV1 
        title="About Us" 
        subtitle="Innovation and excellence in CNC manufacturing"
        :buttons="[
          { text: 'Our History', href: '#historia', class: 'primary-btn' },
          { text: 'Contact Us', href: '/contact', class: 'secondary-btn' }
        ]"
      />
      
      <IntroFrames />
      <DividerStats />
      <CompanyStats />
      <Timeline />
      <CTASection />
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import IntroFrames from '~/components/about-components/IntroFrames.vue'
import DividerStats from '~/components/about-components/DividerStats.vue'
import CompanyStats from '~/components/about-components/CompanyStats.vue'
import Timeline from '~/components/index-components/Timeline.vue'
import CTASection from '~/components/common/CTASection.vue'
import BannerV1 from '~/components/BannerV1.vue'
import AnimatedBackground from '~/components/common/AnimatedBackground.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    IntroFrames,
    DividerStats,
    CompanyStats,
    Timeline,
    CTASection,
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