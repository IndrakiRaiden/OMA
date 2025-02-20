<template>
  <section class="testimonials">
    <div class="section-header">
      <span class="subtitle">TESTIMONIOS</span>
      <h2>Lo que dicen nuestros clientes</h2>
    </div>
    <div class="testimonial-carousel">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <p class="quote">{{ testimonial.quote }}</p>
        <div class="client-info">
          <h4>{{ testimonial.name }}</h4>
          <p>{{ testimonial.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          quote: "OMA ha transformado nuestra cadena de producción, simplificando todo el proceso.",
          name: "Cliente Satisfecho",
          company: "Empresa Industrial"
        },
        {
          id: 2,
          quote: "La calidad y precisión en cada pieza es excepcional.",
          name: "Cliente Satisfecho 2",
          company: "Industria Automotriz"
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 6rem 2rem;
  background: var(--content-light);
  position: relative;
}

.testimonials .section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials .section-header .subtitle {
  color: var(--content-secondary);
  font-weight: 600;
}

.testimonials .section-header h2 {
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.testimonial-carousel {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  scrollbar-width: none;
}

.testimonial-carousel::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  min-width: 300px;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.quote {
  color: var(--content-primary);
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.client-info h4 {
  color: var(--content-secondary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.client-info p {
  color: var(--content-dark);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 4rem 1rem;
  }

  .testimonials .section-header h2 {
    font-size: 2rem;
  }

  .testimonial-carousel {
    padding: 1rem;
  }

  .testimonial-card {
    min-width: 260px;
    padding: 1.5rem;
  }
}
</style>
