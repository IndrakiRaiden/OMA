<template>
  <section class="features-section bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Nuestra experiencia y compromiso con la calidad nos distinguen en la industria.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
          <div class="icon-circle mb-4">
            <i :class="['fas', feature.icon]"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.feature-card {
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-circle {
  width: 64px;
  height: 64px;
  background: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.icon-circle i {
  color: white;
  font-size: 1.5rem;
}
</style>
