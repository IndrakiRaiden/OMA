<template>
  <section class="why-choose-us py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">
        ¿Por qué <span class="text-primary">Elegirnos</span>?
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Nuestra experiencia y compromiso con la excelencia nos distinguen en la industria del mecanizado CNC.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-certificate"></i>
          </div>
          <h3>Calidad Certificada</h3>
          <p>Cumplimos con los más altos estándares de calidad y certificaciones internacionales.</p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Entrega Puntual</h3>
          <p>Garantizamos tiempos de entrega precisos y cumplimiento de plazos establecidos.</p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-tools"></i>
          </div>
          <h3>Tecnología Avanzada</h3>
          <p>Utilizamos equipos CNC de última generación para resultados superiores.</p>
        </div>

        <!-- Feature 4 -->
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-users"></i>
          </div>
          <h3>Equipo Experto</h3>
          <p>Personal altamente capacitado con años de experiencia en mecanizado CNC.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseUs'
}
</script>

<style scoped>
.why-choose-us {
  background-color: #f8fafc;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(165deg, var(--content-primary) 0%, var(--content-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.feature-icon i {
  font-size: 1.75rem;
  color: white;
}

.feature-card h3 {
  color: var(--content-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #64748b;
  line-height: 1.5;
}
</style>
