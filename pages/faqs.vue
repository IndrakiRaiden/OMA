<template>
  <div>
    <NavBar />
    <div class="faqs-page">
      <FaqsBackground>
        <div class="hero text-white py-20 relative z-10">
          <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
            <p class="text-xl">Respuestas a tus dudas sobre nuestros servicios y soluciones</p>
          </div>
        </div>
      </FaqsBackground>

      <div class="faqs-content py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto space-y-6">
            <!-- FAQ Item 1 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-question-circle text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Qué servicios ofrece OMA Solutions?</h3>
                  <p class="text-gray-700">Ofrecemos una amplia gama de servicios de automatización y soluciones tecnológicas para diferentes industrias. Nuestros servicios incluyen desarrollo de software personalizado, integración de sistemas, y soluciones de automatización industrial.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-file-invoice-dollar text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Cómo puedo solicitar una cotización?</h3>
                  <p class="text-gray-700">Puede solicitar una cotización fácilmente a través de nuestra página de cotización en línea o contactándonos directamente. Evaluaremos sus necesidades específicas y le proporcionaremos una propuesta detallada.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-industry text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿En qué industrias tienen experiencia?</h3>
                  <p class="text-gray-700">Tenemos experiencia en diversas industrias, incluyendo manufactura, logística, energía, y más. Puede consultar nuestra página de industrias para obtener más información sobre los sectores específicos en los que trabajamos.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 4 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-cogs text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Cuál es el proceso de implementación?</h3>
                  <p class="text-gray-700">Nuestro proceso de implementación es colaborativo y transparente. Comenzamos con una evaluación detallada de sus necesidades, desarrollamos una solución personalizada, y trabajamos estrechamente con su equipo durante toda la implementación.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 5 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-clock text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Cuál es el tiempo promedio de entrega de un proyecto?</h3>
                  <p class="text-gray-700">El tiempo de entrega varía según la complejidad del proyecto. Típicamente, los proyectos pequeños pueden completarse en 4-6 semanas, mientras que los proyectos más grandes pueden tomar 3-6 meses. Proporcionamos un cronograma detallado durante la fase de planificación.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 6 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-shield-alt text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Qué garantías ofrecen para sus servicios?</h3>
                  <p class="text-gray-700">Ofrecemos garantía en todos nuestros servicios. Esto incluye soporte técnico post-implementación, mantenimiento preventivo y correctivo, y actualizaciones de software según lo acordado en el contrato de servicio.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 7 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-graduation-cap text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Proporcionan capacitación para el uso de sus soluciones?</h3>
                  <p class="text-gray-700">Sí, ofrecemos programas completos de capacitación para asegurar que su equipo pueda utilizar efectivamente nuestras soluciones. Esto incluye documentación detallada, sesiones de entrenamiento presenciales o virtuales, y recursos de aprendizaje en línea.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 8 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-headset text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Qué tipo de soporte técnico ofrecen?</h3>
                  <p class="text-gray-700">Brindamos soporte técnico 24/7 para casos críticos, con diferentes niveles de servicio según las necesidades del cliente. Esto incluye soporte remoto, asistencia en sitio, monitoreo proactivo y mantenimiento preventivo.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 9 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-sync text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Pueden integrar sus soluciones con sistemas existentes?</h3>
                  <p class="text-gray-700">Sí, nuestras soluciones están diseñadas para integrarse con una amplia gama de sistemas existentes. Tenemos experiencia en integración con ERPs, CRMs, sistemas de manufactura, y otras plataformas empresariales comunes.</p>
                </div>
              </div>
            </div>

            <!-- FAQ Item 10 -->
            <div class="faq-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start">
                <div class="icon-wrapper mr-4 mt-1">
                  <i class="fas fa-chart-line text-2xl text-content-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 text-content-dark">¿Cómo miden el éxito de los proyectos?</h3>
                  <p class="text-gray-700">Utilizamos KPIs específicos para cada proyecto, que pueden incluir métricas de rendimiento, ROI, eficiencia operativa, y satisfacción del usuario. Realizamos revisiones periódicas con nuestros clientes para asegurar que se cumplan los objetivos establecidos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import FaqsBackground from '~/components/backgrounds/FaqsBackground.vue'

useHead({
  title: 'FAQs - OMA Solutions',
  meta: [
    { name: 'description', content: 'Preguntas frecuentes sobre los servicios y soluciones de OMA Solutions' }
  ]
})
</script>

<style scoped>
.hero {
  position: relative;
}

.icon-wrapper {
  color: var(--content-secondary);
}

.faq-item {
  border-left: 4px solid var(--content-secondary);
}

.faq-item:hover {
  transform: translateY(-2px);
  border-left-color: var(--content-accent);
}

.faq-item:hover .icon-wrapper {
  color: var(--content-accent);
}
</style>
