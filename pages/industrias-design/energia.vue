<template>
  <div>
    <main class="industry-page">
      <BannerV1 
        title="Industria Energética" 
        subtitle="Soluciones de precisión para componentes del sector energético"
        :buttons="[
          { text: 'Ver Soluciones', href: '#soluciones', class: 'primary-btn' },
          { text: 'Contáctanos', href: '/contact', class: 'secondary-btn' }
        ]"
      />
      
      <DetallesIndustria
        titlePrefix="Soluciones para"
        titleHighlight="la Industria Energética"
        :description="detallesDescription"
        :features="detallesFeatures"
        imageUrl="https://source.unsplash.com/featured/800x600?energy,power,industrial"
      />
      
      <CapacidadesIndustria
        titlePrefix="Nuestras"
        titleHighlight="Especialidades"
        :description="capacidadesDescription"
        :capacities="capacidadesItems"
      />
      
      <ProcesosIndustria
        titlePrefix="Nuestro"
        titleHighlight="Enfoque"
        :description="procesosDescription"
        :steps="procesosSteps"
        commitmentTitle="Compromiso con la Excelencia"
        :commitments="procesosCommitments"
      />
      
      <section class="py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">¿Listo para potenciar sus proyectos energéticos?</h2>
          <p class="text-gray-600 max-w-3xl mx-auto mb-8">
            Contáctenos hoy para discutir sus necesidades específicas y descubrir cómo nuestros servicios de manufactura
            pueden ayudar a su empresa a optimizar sus componentes y sistemas energéticos.
          </p>
          <a href="/contact" class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors">
            Solicitar Información
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import BannerV1 from '../../components/BannerV1.vue'
import DetallesIndustria from '../../components/industrias-components/DetallesIndustria.vue'
import CapacidadesIndustria from '../../components/industrias-components/CapacidadesIndustria.vue'
import ProcesosIndustria from '../../components/industrias-components/ProcesosIndustria.vue'

export default {
  name: 'IndustriaEnergetica',
  components: {
    BannerV1,
    DetallesIndustria,
    CapacidadesIndustria,
    ProcesosIndustria
  },
  data() {
    return {
      detallesDescription: 'Ofrecemos servicios de manufactura de alta precisión para componentes críticos en el sector energético, cumpliendo con los estándares más rigurosos de seguridad, durabilidad y rendimiento para aplicaciones en generación, transmisión y distribución de energía.',
      detallesFeatures: [
        'Componentes para sistemas de generación eléctrica',
        'Piezas para equipos de energías renovables',
        'Componentes para sistemas de distribución',
        'Materiales resistentes a altas temperaturas y presiones',
        'Soluciones con certificaciones del sector energético'
      ],
      capacidadesDescription: 'Nuestra experiencia en la industria energética nos permite ofrecer soluciones que combinan precisión, durabilidad y conformidad con las normativas para componentes críticos en diferentes sistemas energéticos.',
      capacidadesItems: [
        {
          title: 'Energía Convencional',
          description: 'Fabricación de componentes de precisión para sistemas de generación y distribución de energía convencional.',
          icon: 'fa-industry',
          items: [
            'Componentes para turbinas y generadores',
            'Piezas para sistemas de distribución',
            'Elementos para subestaciones eléctricas'
          ]
        },
        {
          title: 'Energías Renovables',
          description: 'Desarrollo de componentes especializados para equipos de energía solar, eólica e hidroeléctrica.',
          icon: 'fa-solar-panel',
          items: [
            'Componentes para paneles solares y seguidores',
            'Piezas para aerogeneradores',
            'Elementos para sistemas hidroeléctricos'
          ]
        },
        {
          title: 'Sistemas de Eficiencia',
          description: 'Soluciones para mejorar la eficiencia y rendimiento de sistemas energéticos existentes.',
          icon: 'fa-bolt',
          items: [
            'Componentes para sistemas de recuperación de calor',
            'Piezas para equipos de monitoreo y control',
            'Elementos para reducción de pérdidas energéticas'
          ]
        }
      ],
      procesosDescription: 'Entendemos los requisitos específicos del sector energético. Nuestros procesos están diseñados para garantizar que cada componente cumpla con las exigentes demandas de seguridad, fiabilidad y eficiencia de esta industria.',
      procesosSteps: [
        {
          title: 'Análisis de Especificaciones Técnicas',
          description: 'Evaluamos detalladamente los requisitos técnicos y estándares aplicables al sector energético.',
          points: [
            'Revisión de normativas específicas del sector',
            'Análisis de condiciones de servicio (temperatura, presión, ambiente)',
            'Estudio de requisitos de seguridad y certificaciones'
          ],
          imageUrl: 'https://source.unsplash.com/featured/600x400?engineering,planning'
        },
        {
          title: 'Diseño y Simulación',
          description: 'Desarrollamos soluciones precisas con herramientas avanzadas de diseño y simulación para validar rendimiento.',
          points: [
            'Modelado 3D y análisis de elementos finitos',
            'Simulación de condiciones extremas',
            'Optimización de diseño para máxima eficiencia'
          ],
          imageUrl: 'https://source.unsplash.com/featured/600x400?engineering,design,simulation'
        },
        {
          title: 'Fabricación Controlada',
          description: 'Producimos componentes bajo estricto control de procesos para garantizar la máxima calidad y trazabilidad.',
          points: [
            'Procesos certificados para el sector energético',
            'Control estadístico de procesos (SPC)',
            'Inspección y documentación detallada para trazabilidad'
          ],
          imageUrl: 'https://source.unsplash.com/featured/600x400?manufacturing,precision,quality'
        }
      ],
      procesosCommitments: [
        {
          title: 'Seguridad Integral',
          description: 'Componentes diseñados priorizando la seguridad en todas las fases de operación.',
          icon: 'fa-shield-alt'
        },
        {
          title: 'Eficiencia Energética',
          description: 'Soluciones optimizadas para maximizar el rendimiento energético en cada aplicación.',
          icon: 'fa-bolt'
        },
        {
          title: 'Sostenibilidad',
          description: 'Compromiso con prácticas sostenibles y apoyo a tecnologías de energía limpia.',
          icon: 'fa-leaf'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Industria Energética | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones de manufactura de precisión para componentes del sector energético convencional y renovable.' }
      ]
    }
  }
}
</script>

<style scoped>
.industry-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.text-primary {
  color: var(--content-primary);
}

.bg-primary {
  background-color: var(--content-primary);
}

.hover\:bg-primary-dark:hover {
  background-color: var(--content-secondary);
}
</style>
