<template>
  <section class="testimonials">
    <div class="testimonials-bg"></div>
    <div class="section-header">
      <span class="subtitle">TESTIMONIOS</span>
      <h2>La Excelencia Respaldada por Nuestros Clientes</h2>
      <p class="section-description">Descubre cómo hemos transformado operaciones y superado expectativas</p>
    </div>

    <div class="testimonial-container">
      <div class="testimonial-slider">
        <testimonial-card
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
          :is-active="currentIndex === index"
          :is-prev="currentIndex === index + 1"
          :is-next="currentIndex === index - 1"
          :position="index - currentIndex"
        />
      </div>

      <navigation-controls
        :current-index="currentIndex"
        :total-slides="testimonials.length"
        @prev="prevSlide"
        @next="nextSlide"
      />
    </div>
  </section>
</template>

<script>
import TestimonialCard from '../testi-components/TestimonialCard.vue'
import NavigationControls from '../testi-components/NavigationControls.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialCard,
    NavigationControls
  },
  data() {
    return {
      currentIndex: 0,
      autoplayInterval: null,
      mouseX: 0,
      mouseY: 0,
      testimonials: [
        {
          id: 1,
          name: "Ing. Juan Carlos Méndez",
          position: "Director de Innovación y Manufactura",
          company: "Industrias Metalúrgicas Avanzadas",
          companyLogo: "/logos/ima-logo.png",
          image: "/testimonials/juan-mendez.jpg",
          icon: "fas fa-industry",
          badgeColor: "#2563eb",
          quote: "La implementación del sistema automatizado de OMA revolucionó nuestra línea de producción. Logramos reducir los tiempos de fabricación en un 40% mientras aumentamos la precisión al 99.9%. Una inversión que transformó nuestra operación.",
          metrics: [
            { value: "40%", label: "Reducción en Tiempo" },
            { value: "99.9%", label: "Precisión" },
            { value: "85%", label: "Menos Desperdicios" }
          ]
        },
        {
          id: 2,
          name: "Dra. María Elena Rodríguez",
          position: "Directora de Control de Calidad",
          company: "TecnoMex Automotive",
          companyLogo: "/logos/tecnomex-logo.png",
          image: "/testimonials/maria-rodriguez.jpg",
          icon: "fas fa-car",
          badgeColor: "#dc2626",
          quote: "La precisión y consistencia que OMA ha traído a nuestra línea de producción es excepcional. Desde la implementación, nuestras devoluciones por defectos han disminuido en un 95%. Su tecnología de inspección automatizada es incomparable.",
          metrics: [
            { value: "95%", label: "Menos Defectos" },
            { value: "2.5M", label: "Piezas/Mes" },
            { value: "0.1%", label: "Tasa de Error" }
          ]
        },
        {
          id: 3,
          name: "Ing. Roberto Sánchez",
          position: "Director de Operaciones",
          company: "Aerospace Solutions México",
          companyLogo: "/logos/asm-logo.png",
          image: "/testimonials/roberto-sanchez.jpg",
          icon: "fas fa-plane",
          badgeColor: "#0891b2",
          quote: "En la industria aeroespacial, la precisión no es una opción, es una necesidad. OMA no solo entendió nuestros estrictos requerimientos, sino que desarrolló soluciones que superaron todas nuestras expectativas.",
          metrics: [
            { value: "100%", label: "Cumplimiento" },
            { value: "±0.001mm", label: "Precisión" },
            { value: "60%", label: "Mayor Eficiencia" }
          ]
        },
        {
          id: 4,
          name: "Lic. Ana Patricia Torres",
          position: "CEO",
          company: "Grupo Industrial del Norte",
          companyLogo: "/logos/gin-logo.png",
          image: "/testimonials/ana-torres.jpg",
          icon: "fas fa-chart-line",
          badgeColor: "#059669",
          quote: "La colaboración con OMA ha sido transformadora. Su equipo no solo nos proporcionó tecnología de punta, sino que nos acompañó en todo el proceso de implementación y optimización. El ROI superó nuestras expectativas en el primer año.",
          metrics: [
            { value: "300%", label: "ROI 1er Año" },
            { value: "45%", label: "Menos Costos" },
            { value: "24/7", label: "Operación" }
          ]
        }
      ]
    }
  },
  computed: {
    wrapperStyle() {
      return {
        transform: `translate(${this.mouseX / 50}px, ${this.mouseY / 50}px)`
      }
    }
  },
  methods: {
    handleMouseMove(event) {
      const rect = this.$refs.container.getBoundingClientRect()
      this.mouseX = event.clientX - rect.left - rect.width / 2
      this.mouseY = event.clientY - rect.top - rect.height / 2
    },
    selectCard(index) {
      if (index !== this.currentIndex) {
        this.currentIndex = index
      }
    },
    nextSlide() {
      if (this.currentIndex < this.testimonials.length - 1) {
        this.currentIndex++
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        if (this.currentIndex === this.testimonials.length - 1) {
          this.currentIndex = 0
        } else {
          this.nextSlide()
        }
      }, 5000)
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
      }
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeDestroy() {
    this.stopAutoplay()
  }
}
</script>

<style scoped>
.testimonials {
  position: relative;
  padding: 3rem 0 8rem;
  overflow: hidden;
  min-height: 500px;
}

.testimonials-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 50% 50%, rgba(8, 145, 178, 0.1) 0%, transparent 30%);
  opacity: 0.5;
  z-index: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 7rem;
  position: relative;
  z-index: 2;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--content-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: block;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}

.section-description {
  font-size: 1.1rem;
  color: var(--content-dark);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.8;
}

.testimonial-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
}

.testimonial-slider {
  position: relative;
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 2rem 0 6rem;
  }

  .section-header {
    margin-bottom: 5rem;
  }

  .section-header h2 {
    font-size: 2.25rem;
  }

  .section-description {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
</style>
