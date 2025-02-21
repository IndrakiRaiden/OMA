<template>
  <div>
    <NavBar />
    <main class="faqs-page">
      <BannerV1 
        title="Preguntas Frecuentes" 
        subtitle="Encuentra respuestas a las preguntas más comunes"
        :buttons="[
          { text: 'Ver Preguntas', href: '#faqs', class: 'primary-btn' },
          { text: 'Contáctanos', href: '/contact', class: 'secondary-btn' }
        ]"
      />
      <div id="faqs" class="faqs-content py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="space-y-6">
              <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
                <button 
                  class="faq-question"
                  :class="{ 'active': activeIndex === index }"
                  @click="toggleFaq(index)"
                >
                  {{ faq.question }}
                  <i class="fas" :class="activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </button>
                <div 
                  class="faq-answer"
                  :class="{ 'active': activeIndex === index }"
                  v-show="activeIndex === index"
                >
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BannerV1 from '~/components/BannerV1.vue'

export default {
  name: 'FAQsPage',
  components: {
    NavBar,
    Footer,
    BannerV1
  },
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: '¿Qué tipos de servicios de mecanizado CNC ofrecen?',
          answer: 'Ofrecemos una amplia gama de servicios de mecanizado CNC, incluyendo fresado, torneado, corte por láser y fabricación de prototipos. Trabajamos con diversos materiales y podemos manejar proyectos de diferentes escalas.'
        },
        {
          question: '¿Cuál es el tiempo promedio de entrega para un proyecto?',
          answer: 'El tiempo de entrega varía según la complejidad del proyecto, pero generalmente manejamos plazos de 2-4 semanas para proyectos estándar. Para proyectos urgentes, podemos ofrecer tiempos de entrega más cortos.'
        },
        {
          question: '¿Trabajan con materiales específicos?',
          answer: 'Sí, trabajamos con una amplia variedad de materiales incluyendo acero, aluminio, titanio, plásticos industriales y otros materiales especializados según los requerimientos del proyecto.'
        },
        {
          question: '¿Ofrecen servicios de diseño CAD/CAM?',
          answer: 'Sí, contamos con un equipo especializado en diseño CAD/CAM que puede ayudarte a optimizar tus diseños para la producción CNC, garantizando la mejor calidad y eficiencia.'
        },
        {
          question: '¿Cómo puedo solicitar una cotización?',
          answer: 'Puedes solicitar una cotización a través de nuestro formulario en línea en la sección "Cotiza", por correo electrónico o llamándonos directamente. Te responderemos en un plazo máximo de 24 horas hábiles.'
        },
        {
          question: '¿Ofrecen servicios de prototipado rápido?',
          answer: 'Sí, ofrecemos servicios de prototipado rápido utilizando tecnología CNC de última generación. Esto nos permite crear prototipos funcionales de alta calidad en plazos cortos.'
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
.faqs-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.faqs-content {
  position: relative;
  z-index: 1;
}

.faq-item {
  background: white;
  border: 1px solid var(--content-gray);
  border-radius: 0.5rem;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  font-weight: 600;
  color: var(--content-primary);
  background: white;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.faq-question.active {
  color: var(--content-secondary);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: var(--content-dark);
  line-height: 1.6;
}

.fas {
  transition: transform 0.3s ease;
}

.faq-question.active .fas {
  transform: rotate(180deg);
}
</style>
