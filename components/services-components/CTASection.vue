<template>
  <section class="cta-section bg-primary py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
        ¿Listo para empezar tu proyecto?
      </h2>
      <p class="text-white opacity-90 mb-8 max-w-2xl mx-auto">
        Contáctanos hoy mismo y descubre cómo podemos ayudarte a llevar tu idea a la realidad.
      </p>
      <div class="flex justify-center gap-4">
        <a href="/contact" class="btn-white">
          Contactar ahora
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
        <a href="/cotiza" class="btn-outline-white">
          Solicitar cotización
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection'
}
</script>

<style scoped>
.cta-section {
  background: var(--content-primary);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%);
  z-index: 1;
}

.btn-white {
  background: white;
  color: var(--content-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-outline-white {
  border: 2px solid white;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-white:hover {
  background: white;
  color: var(--content-primary);
}

@media (max-width: 768px) {
  .flex {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
