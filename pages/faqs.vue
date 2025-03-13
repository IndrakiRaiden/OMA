<template>
  <div>
    <main class="faqs-page">
      <BannerV1 
        title="Preguntas Frecuentes" 
        subtitle="Encuentra rápidamente las respuestas que necesitas"
        :buttons="[
          { text: 'Contactar Soporte', href: '/contact', class: 'primary-btn' }
        ]"
      />
      
      <section class="faqs-content py-16">
        <div class="container mx-auto px-4">
          <!-- Search Bar -->
          <div class="mb-12">
            <SearchBar
              v-model="searchQuery"
              placeholder="Buscar preguntas frecuentes..."
              @search="handleSearch"
            />
          </div>

          <!-- Categories -->
          <div class="categories-container mb-12">
            <div class="flex flex-wrap justify-center gap-4">
              <button 
                v-for="category in categories" 
                :key="category.id"
                @click="selectCategory(category.id)"
                class="category-btn"
                :class="{ 'active': selectedCategory === category.id }"
              >
                <i :class="category.icon"></i>
                {{ category.name }}
              </button>
            </div>
          </div>

          <!-- FAQs -->
          <div class="max-w-4xl mx-auto">
            <TransitionGroup 
              name="faq-list"
              tag="div"
              class="space-y-4"
            >
              <div 
                v-for="faq in filteredFaqs" 
                :key="faq.id"
                class="faq-item"
              >
                <button 
                  class="faq-question"
                  :class="{ 'active': activeIndex === faq.id }"
                  @click="toggleFaq(faq.id)"
                >
                  <div class="flex items-center">
                    <span class="question-marker">P</span>
                    <span>{{ faq.question }}</span>
                  </div>
                  <i class="fas" :class="activeIndex === faq.id ? 'fa-minus' : 'fa-plus'"></i>
                </button>
                <transition name="expand">
                  <div 
                    v-show="activeIndex === faq.id"
                    class="faq-answer"
                  >
                    <div class="answer-wrapper">
                      <div class="answer-content">
                        <span class="answer-marker">R</span>
                        <div class="answer-text">{{ faq.answer }}</div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import BannerV1 from '~/components/BannerV1.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'FAQsPage',
  components: {
    BannerV1,
    SearchBar
  },
  data() {
    return {
      activeIndex: null,
      searchQuery: '',
      selectedCategory: 'all',
      categories: [
        { id: 'all', name: 'Todas', icon: 'fas fa-th-large' },
        { id: 'services', name: 'Servicios', icon: 'fas fa-cogs' },
        { id: 'timing', name: 'Tiempos y Entregas', icon: 'fas fa-clock' },
        { id: 'materials', name: 'Materiales', icon: 'fas fa-cube' },
        { id: 'quotes', name: 'Cotizaciones', icon: 'fas fa-calculator' }
      ],
      faqs: [
        {
          id: 1,
          category: 'services',
          question: '¿Qué tipos de servicios de mecanizado CNC ofrecen?',
          answer: 'Ofrecemos una amplia gama de servicios de mecanizado CNC, incluyendo fresado, torneado, corte por láser y fabricación de prototipos. Trabajamos con diversos materiales y podemos manejar proyectos de diferentes escalas.'
        },
        {
          id: 2,
          category: 'timing',
          question: '¿Cuál es el tiempo promedio de entrega para un proyecto?',
          answer: 'El tiempo de entrega varía según la complejidad del proyecto, pero generalmente manejamos plazos de 2-4 semanas para proyectos estándar. Para proyectos urgentes, podemos ofrecer tiempos de entrega más cortos.'
        },
        {
          id: 3,
          category: 'materials',
          question: '¿Con qué materiales trabajan?',
          answer: 'Trabajamos con una amplia variedad de materiales incluyendo acero, aluminio, titanio, plásticos industriales y otros materiales especializados según los requerimientos del proyecto. Cada material es cuidadosamente seleccionado para garantizar la mejor calidad en el producto final.'
        },
        {
          id: 4,
          category: 'services',
          question: '¿Ofrecen servicios de diseño CAD/CAM?',
          answer: 'Sí, contamos con un equipo especializado en diseño CAD/CAM que puede ayudarte a optimizar tus diseños para la producción CNC, garantizando la mejor calidad y eficiencia. Nuestros expertos pueden asesorarte en cada etapa del proceso.'
        },
        {
          id: 5,
          category: 'quotes',
          question: '¿Cómo puedo solicitar una cotización?',
          answer: 'Puedes solicitar una cotización de tres formas: 1) A través de nuestro formulario en línea en la sección "Cotiza", 2) Por correo electrónico a cotizaciones@oma.mx, o 3) Llamándonos directamente al (55) 1234-5678. Te responderemos en un plazo máximo de 24 horas hábiles.'
        },
        {
          id: 6,
          category: 'services',
          question: '¿Ofrecen servicios de prototipado rápido?',
          answer: 'Sí, ofrecemos servicios de prototipado rápido utilizando tecnología CNC de última generación. Esto nos permite crear prototipos funcionales de alta calidad en plazos cortos, ideales para validación de diseños y pruebas de concepto.'
        },
        {
          id: 7,
          category: 'quotes',
          question: '¿Cuánto tarda una cotización?',
          answer: 'Nuestro equipo procesa las solicitudes de cotización en un plazo máximo de 24-48 horas hábiles. Para proyectos más complejos, podría tomar hasta 72 horas para proporcionar un presupuesto detallado y preciso.'
        },
        {
          id: 8,
          category: 'timing',
          question: '¿Cuáles son los tiempos de entrega?',
          answer: 'Los tiempos de entrega dependen del tipo de servicio, complejidad y volumen del proyecto. Generalmente, nuestros plazos van desde 1-2 semanas para proyectos sencillos hasta 4-6 semanas para proyectos más complejos. Siempre nos esforzamos por cumplir con las fechas acordadas y mantenemos comunicación constante sobre el avance de su proyecto.'
        },
        {
          id: 9,
          category: 'materials',
          question: '¿Qué materiales manejan?',
          answer: 'Manejamos una amplia gama de materiales, incluyendo: metales (acero inoxidable, aluminio, latón, cobre, titanio), plásticos de ingeniería (ABS, POM, nylon, policarbonato, PEEK), y materiales especiales según requerimiento. Nuestro equipo puede asesorarle sobre el material más adecuado para su aplicación específica.'
        },
        {
          id: 10,
          category: 'services',
          question: '¿Trabajan con pedidos pequeños?',
          answer: 'Sí, trabajamos con pedidos de todos los tamaños, desde piezas únicas y prototipos hasta producciones en serie. Nuestro sistema de producción está optimizado para ser eficiente tanto en pedidos pequeños como en grandes volúmenes, ofreciendo siempre la mejor relación calidad-precio independientemente de la cantidad.'
        }
      ]
    }
  },
  computed: {
    filteredFaqs() {
      return this.faqs.filter(faq => {
        const matchesCategory = this.selectedCategory === 'all' || faq.category === this.selectedCategory
        const matchesSearch = this.searchQuery === '' || 
          faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
    }
  },
  methods: {
    toggleFaq(id) {
      if (this.activeIndex === id) {
        this.activeIndex = null
      } else {
        this.activeIndex = id
      }
    },
    selectCategory(categoryId) {
      this.selectedCategory = categoryId
      this.activeIndex = null
    },
    handleSearch() {
      this.activeIndex = null
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

/* Category Styles */
.category-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 1.5rem;
  background: white;
  border: 2px solid var(--content-gray);
  color: var(--content-dark);
  transition: all 0.3s ease;
  font-weight: 500;
}

.category-btn i {
  margin-right: 0.5rem;
}

.category-btn:hover {
  border-color: var(--content-primary);
  color: var(--content-primary);
}

.category-btn.active {
  background: var(--content-primary);
  border-color: var(--content-primary);
  color: white;
}

/* FAQ Item Styles */
.faq-item {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
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

.question-marker, .answer-marker {
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.question-marker {
  background: rgba(var(--content-primary-rgb), 0.1);
  color: var(--content-primary);
}

.answer-marker {
  background: rgba(var(--content-secondary-rgb), 0.1);
  color: var(--content-secondary);
}

.faq-answer {
  overflow: hidden;
  background: rgba(var(--content-secondary-rgb), 0.02);
  border-top: 1px solid rgba(var(--content-gray-rgb), 0.1);
}

.answer-wrapper {
  padding: 1.5rem;
}

.answer-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

/* Expand animation */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 1000px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-12px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Plus/minus icon */
.fas {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-question.active .fas.fa-plus {
  transform: rotate(45deg);
}

.faq-question:hover {
  background: rgba(var(--content-primary-rgb), 0.02);
}

.faq-question.active {
  background: rgba(var(--content-primary-rgb), 0.05);
  color: var(--content-primary);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transitions */
.faq-list-move {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-list-enter-active,
.faq-list-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-list-enter-from,
.faq-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
