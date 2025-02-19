<template>
  <div>
    <NavBar />
    <div class="cotiza-page">
      <AnimatedBackground />
      <div class="content-wrapper">
        <div class="hero-content">
          <h1 class="hero-title">
            Cotiza tu Proyecto
            <span class="highlight">Innovador</span>
          </h1>
          <p class="hero-subtitle">Transformamos tus ideas en soluciones tecnológicas de alto impacto</p>
        </div>
        
        <div class="form-container">
          <form @submit.prevent="handleSubmit" class="quote-form">
            <div class="form-grid">
              <div class="form-group">
                <label for="nombre" class="form-label">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  v-model="formData.nombre"
                  class="form-input"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="telefono" class="form-label">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  v-model="formData.telefono"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="tipo" class="form-label">Tipo de Proyecto</label>
                <select
                  id="tipo"
                  v-model="formData.tipo"
                  class="form-input"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="mobile">Aplicación Móvil</option>
                  <option value="desktop">Software de Escritorio</option>
                  <option value="consulting">Consultoría</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>

            <div class="form-group full-width">
              <label for="descripcion" class="form-label">Descripción del Proyecto</label>
              <textarea
                id="descripcion"
                v-model="formData.descripcion"
                rows="4"
                class="form-input"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">
              <span>Solicitar Cotización</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import AnimatedBackground from '../components/backgrounds/AnimatedBackground.vue'

export default defineComponent({
  name: 'CotizaPage',
  components: {
    NavBar,
    Footer,
    AnimatedBackground
  },
  setup() {
    const formData = ref({
      nombre: '',
      email: '',
      telefono: '',
      tipo: '',
      descripcion: ''
    })

    const handleSubmit = () => {
      console.log('Form submitted:', formData.value)
      alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.')
      resetForm()
    }

    const resetForm = () => {
      formData.value = {
        nombre: '',
        email: '',
        telefono: '',
        tipo: '',
        descripcion: ''
      }
    }

    return {
      formData,
      handleSubmit
    }
  }
})
</script>

<style scoped>
.cotiza-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
  position: relative;
  display: inline-block;
}

.highlight {
  color: var(--content-secondary);
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: var(--content-secondary);
  opacity: 0.2;
  z-index: -1;
  transform: skew(-12deg) rotate(-2deg);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.form-container {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  margin: 0 auto;
}

.quote-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  position: relative;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--content-primary);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  background-color: white;
  transition: all 0.3s ease;
  color: var(--content-primary);
}

.form-input:focus {
  outline: none;
  border-color: var(--content-secondary);
  box-shadow: 0 0 0 3px rgba(var(--content-secondary-rgb), 0.1);
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--content-secondary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn span {
  position: relative;
  z-index: 1;
}

.submit-btn i {
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  background: var(--content-primary);
}

.submit-btn:hover i {
  transform: translateX(5px);
}

@media (max-width: 640px) {
  .cotiza-page {
    padding: 6rem 1rem;
  }

  .form-container {
    padding: 2rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
