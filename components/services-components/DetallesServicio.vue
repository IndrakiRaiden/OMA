<template>
  <section id="detalles" class="details-section py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        {{ titlePrefix }} <span class="text-primary">{{ titleHighlight }}</span>
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        {{ description }}
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 class="text-2xl font-bold mb-6">{{ featuresTitle }}</h3>
          <ul class="space-y-3">
            <li v-for="(feature, index) in features" :key="index" class="flex items-start">
              <div class="mr-3 mt-1 text-primary">
                <i class="fas fa-check-circle"></i>
              </div>
              <div>
                <span class="font-semibold">{{ feature.title }}</span> - {{ feature.description }}
              </div>
            </li>
          </ul>
          
          <h3 class="text-2xl font-bold mt-10 mb-6">{{ materialsTitle }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div v-for="(materialGroup, index) in materialGroups" :key="index">
              <h4 class="font-semibold mb-2 text-primary">{{ materialGroup.title }}</h4>
              <ul class="space-y-1 pl-4">
                <li v-for="(material, mIndex) in materialGroup.items" :key="mIndex">{{ material }}</li>
              </ul>
            </div>
          </div>
          
          <div v-if="otherMaterials" class="mt-6">
            <h4 class="font-semibold mb-2 text-primary">{{ otherMaterialsTitle }}</h4>
            <p>{{ otherMaterials }}</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="rounded-lg mb-6 w-full h-64 bg-gray-300 flex items-center justify-center overflow-hidden">
            <img v-if="imageUrl" :src="imageUrl" :alt="titleHighlight" class="w-full h-full object-cover" />
            <span v-else class="text-gray-600">Imagen de {{ titleHighlight }}</span>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">{{ advantagesTitle }}</h3>
            <ul class="space-y-3">
              <li v-for="(advantage, index) in advantages" :key="index" class="flex items-start">
                <div class="mr-3 mt-1 text-primary">
                  <i class="fas fa-star"></i>
                </div>
                <div>
                  <span class="font-semibold">{{ advantage.title }}</span> - {{ advantage.description }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titlePrefix: {
    type: String,
    default: 'Servicio de'
  },
  titleHighlight: {
    type: String,
    default: 'Maquinado CNC'
  },
  description: {
    type: String,
    default: 'Ofrecemos servicios de maquinado CNC de alta precisión para satisfacer sus necesidades específicas de fabricación con los más altos estándares de calidad.'
  },
  featuresTitle: {
    type: String,
    default: 'Productos que fabricamos'
  },
  features: {
    type: Array,
    default: () => [
      {
        title: 'Piezas de precisión',
        description: 'Rango de diámetros de hasta 10 pulgadas x 14 pulgadas de largo.'
      },
      {
        title: 'Componentes industriales',
        description: 'Cilindros, pistones de inyección, poleas, chumaceras y sprockets.'
      },
      {
        title: 'Herramientas especializadas',
        description: 'Bujes, punzones y matrices para diversas aplicaciones industriales.'
      }
    ]
  },
  materialsTitle: {
    type: String,
    default: 'Materiales que utilizamos'
  },
  materialGroups: {
    type: Array,
    default: () => [
      {
        title: 'Aceros Grado Herramienta',
        items: [
          'A2 - Alta resistencia y tenacidad',
          'D2 - Resistencia extrema al desgaste',
          'O1 - Templabilidad y estabilidad',
          'M2 - Alta velocidad y durabilidad',
          'S7 - Resistencia al impacto',
          'H13 - Trabajo en caliente'
        ]
      },
      {
        title: 'Aceros Grado Maquinaria',
        items: [
          'A36 - Estructural de uso general',
          'A572 - Alta resistencia y bajo peso',
          '4140 - Templabilidad y dureza',
          '1018 - Versátil de uso general',
          '8620 - Carburización y resistencia'
        ]
      }
    ]
  },
  otherMaterialsTitle: {
    type: String,
    default: 'Otros Materiales'
  },
  otherMaterials: {
    type: String,
    default: 'Aluminio, acero inoxidable, plásticos industriales, bronce, latón, cobre y acero inoxidable grado alimenticio.'
  },
  advantagesTitle: {
    type: String,
    default: 'Ventajas del Maquinado CNC'
  },
  advantages: {
    type: Array,
    default: () => [
      {
        title: 'Precisión excepcional',
        description: 'Tolerancias de hasta ±0.001 mm para piezas críticas.'
      },
      {
        title: 'Repetibilidad',
        description: 'Producción consistente para series de piezas idénticas.'
      },
      {
        title: 'Versatilidad',
        description: 'Capacidad para producir geometrías complejas y precisas.'
      }
    ]
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.details-section {
  background-color: var(--background-light);
}

h3 {
  color: var(--content-secondary);
}

.text-primary {
  color: var(--content-primary);
}
</style>
