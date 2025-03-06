<template>
  <div>
    <main class="quote-page">
      <BannerV1 
        title="Cotiza tu Proyecto" 
        subtitle="Obtén una cotización personalizada para tu proyecto"
        :buttons="[
          { text: 'Cotizar Ahora', href: '#quote-form', class: 'primary-btn' },
          { text: 'Ver Servicios', href: '/servicios', class: 'secondary-btn' }
        ]"
      />
      <div id="quote-form" class="quote-content py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-center">Solicitud de Cotización</h2>
            
            <!-- Form Progress Indicator -->
            <div v-if="!formSubmitted" class="mb-8">
              <div class="flex justify-between">
                <div v-for="step in totalSteps" :key="step" class="text-center">
                  <div 
                    :class="[
                      'w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white font-bold mb-2',
                      currentStep >= step ? 'bg-primary' : 'bg-gray'
                    ]"
                  >
                    {{ step }}
                  </div>
                  <div class="text-sm">
                    {{ step === 1 ? 'Información' : step === 2 ? 'Proyecto' : 'Presupuesto' }}
                  </div>
                </div>
              </div>
              <div class="relative mt-2">
                <div class="absolute top-0 h-1 bg-gray w-full"></div>
                <div 
                  class="absolute top-0 h-1 transition-all duration-300"
                  :style="{ 
                    width: ((currentStep - 1) / (totalSteps - 1)) * 100 + '%',
                    background: 'linear-gradient(to right, var(--content-primary) 0%, var(--content-primary) 60%, var(--content-secondary) 80%, var(--content-accent) 100%)',
                    backgroundSize: '200%',
                    backgroundPosition: currentStep === 1 ? 'left' : currentStep === 2 ? 'center' : 'right'
                  }"
                ></div>
              </div>
            </div>
            
            <!-- Success Message -->
            <div v-if="formSubmitted" class="text-center py-8">
              <div class="w-20 h-20 mx-auto bg-success-light rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-dark mb-2">¡Solicitud Enviada!</h3>
              <p class="text-gray mb-6">Hemos recibido tu solicitud de cotización. Nos pondremos en contacto contigo pronto.</p>
              <button @click="formSubmitted = false" class="primary-btn px-6 py-2">
                Nueva Cotización
              </button>
            </div>
            
            <!-- Multi-step Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Step 1: Información Personal -->
              <div v-show="currentStep === 1" class="space-y-4">
                <h3 class="text-xl font-semibold flex items-center">
                  <span class="w-8 h-8 bg-primary text-white rounded-full inline-flex items-center justify-center mr-2">1</span>
                  Información Personal
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-dark mb-2" for="name">Nombre <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name" 
                      class="form-input" 
                      :class="{'border-red-500': errors.name}"
                      placeholder="Tu nombre completo"
                    >
                    <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                  </div>
                  <div>
                    <label class="block text-dark mb-2" for="email">Email <span class="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email" 
                      class="form-input" 
                      :class="{'border-red-500': errors.email}"
                      placeholder="ejemplo@email.com"
                    >
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label class="block text-dark mb-2" for="phone">Teléfono <span class="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="form.phone" 
                      class="form-input" 
                      :class="{'border-red-500': errors.phone}"
                      placeholder="(123) 456-7890"
                    >
                    <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
                  </div>
                  <div>
                    <label class="block text-dark mb-2" for="company">Empresa</label>
                    <input 
                      type="text" 
                      id="company" 
                      v-model="form.company" 
                      class="form-input"
                      placeholder="Nombre de tu empresa (opcional)"
                    >
                  </div>
                </div>
              </div>

              <!-- Step 2: Detalles del Proyecto -->
              <div v-show="currentStep === 2" class="space-y-4">
                <h3 class="text-xl font-semibold flex items-center">
                  <span class="w-8 h-8 bg-primary text-white rounded-full inline-flex items-center justify-center mr-2">2</span>
                  Detalles del Proyecto
                </h3>
                <div>
                  <label class="block text-dark mb-2" for="service">Tipo de Servicio <span class="text-red-500">*</span></label>
                  <select 
                    id="service" 
                    v-model="form.service" 
                    class="form-select" 
                    :class="{'border-red-500': errors.service}"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="recubrimientos">Recubrimientos</option>
                    <option value="acabados">Acabados</option>
                    <option value="corte-laser">Corte Láser</option>
                    <option value="maquinado-cnc">Maquinado CNC</option>
                    <option value="produccion">Producción</option>
                    <option value="maquinado-convencional">Maquinado Convencional</option>
                  </select>
                  <p v-if="errors.service" class="text-red-500 text-sm mt-1">{{ errors.service }}</p>
                </div>
                <div>
                  <label class="block text-dark mb-2" for="quantity">Cantidad <span class="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    id="quantity" 
                    v-model="form.quantity" 
                    class="form-input" 
                    :class="{'border-red-500': errors.quantity}"
                    placeholder="Número de unidades requeridas"
                    min="1"
                  >
                  <p v-if="errors.quantity" class="text-red-500 text-sm mt-1">{{ errors.quantity }}</p>
                </div>
                <div>
                  <label class="block text-dark mb-2" for="material">Material <span class="text-red-500">*</span></label>
                  <select 
                    id="material" 
                    v-model="form.material" 
                    class="form-select" 
                    :class="{'border-red-500': errors.material}"
                  >
                    <option value="">Selecciona un material</option>
                    <option value="acero">Acero</option>
                    <option value="aluminio">Aluminio</option>
                    <option value="plastico">Plástico</option>
                    <option value="madera">Madera</option>
                    <option value="otro">Otro (especificar en descripción)</option>
                  </select>
                  <p v-if="errors.material" class="text-red-500 text-sm mt-1">{{ errors.material }}</p>
                </div>
                <div>
                  <label class="block text-dark mb-2" for="specifications">Planos o especificaciones técnicas</label>
                  <textarea 
                    id="specifications" 
                    v-model="form.specifications" 
                    class="form-textarea" 
                    :class="{'border-red-500': errors.specifications}"
                    rows="3" 
                    maxlength="500"
                    placeholder="Detalla las especificaciones técnicas o menciona si incluirás planos en los archivos adjuntos (opcional)"
                  ></textarea>
                  <p v-if="errors.specifications" class="text-red-500 text-sm mt-1">{{ errors.specifications }}</p>
                </div>
                <div>
                  <label class="block text-dark mb-2" for="description">Descripción del Proyecto <span class="text-red-500">*</span></label>
                  <textarea 
                    id="description" 
                    v-model="form.description" 
                    class="form-textarea" 
                    :class="{'border-red-500': errors.description}"
                    rows="4" 
                    maxlength="1000"
                    placeholder="Describe tu proyecto, necesidades específicas y expectativas"
                  ></textarea>
                  <p v-if="errors.description" class="text-red-500 text-sm mt-1">{{ errors.description }}</p>
                </div>
                <div>
                  <label class="block text-dark mb-2">Archivos Adjuntos (Dibujos, planos, etc.)</label>
                  <div class="border-2 border-dashed border-gray rounded-lg p-4 text-center">
                    <input 
                      type="file" 
                      id="file-upload" 
                      @change="handleFileUpload" 
                      multiple 
                      class="hidden"
                    >
                    <label for="file-upload" class="cursor-pointer">
                      <div class="flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="text-sm text-dark">Arrastra archivos aquí o <span class="text-primary">selecciona archivos</span></p>
                        <p class="text-xs text-gray mt-1">Soporta: CAD, PDF, JPG, PNG (máx. 10MB)</p>
                      </div>
                    </label>
                  </div>
                  <div v-if="form.files.length > 0" class="mt-4">
                    <p class="text-sm font-medium mb-2">Archivos seleccionados:</p>
                    <ul class="space-y-2">
                      <li v-for="(file, index) in form.files" :key="index" class="flex items-center justify-between bg-light p-2 rounded">
                        <span class="text-sm truncate">{{ file.name }}</span>
                        <button @click.prevent="removeFile(index)" class="text-error hover:text-error-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Step 3: Presupuesto -->
              <div v-show="currentStep === 3" class="space-y-4">
                <h3 class="text-xl font-semibold flex items-center">
                  <span class="w-8 h-8 bg-primary text-white rounded-full inline-flex items-center justify-center mr-2">3</span>
                  Presupuesto y Finalización
                </h3>
                <div>
                  <label class="block text-dark mb-2" for="budget">Rango de Presupuesto <span class="text-red-500">*</span></label>
                  <select 
                    id="budget" 
                    v-model="form.budget" 
                    class="form-select" 
                    :class="{'border-red-500': errors.budget}"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="bajo">Menos de $10,000</option>
                    <option value="medio">$10,000 - $50,000</option>
                    <option value="alto">$50,000 - $100,000</option>
                    <option value="enterprise">Más de $100,000</option>
                  </select>
                  <p v-if="errors.budget" class="text-red-500 text-sm mt-1">{{ errors.budget }}</p>
                </div>
                <div class="bg-light p-4 rounded-lg mt-6">
                  <h4 class="font-medium text-primary-dark mb-2">¿Por qué elegir nuestros servicios?</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-sm">Equipo de expertos con más de 10 años de experiencia</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-sm">Tecnología de última generación para resultados precisos</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-sm">Soporte personalizado durante todo el proceso</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex justify-between mt-8">
                <button 
                  v-if="currentStep > 1" 
                  type="button" 
                  @click="prevStep" 
                  class="secondary-btn px-6 py-2 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>
                <div v-else></div>
                
                <button 
                  v-if="currentStep < totalSteps" 
                  type="button" 
                  @click="nextStep" 
                  class="primary-btn px-6 py-2 flex items-center"
                >
                  Siguiente
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  v-else 
                  type="submit" 
                  class="primary-btn px-8 py-3 flex items-center"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                  <span v-else>
                    Solicitar Cotización
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BannerV1 from '../components/BannerV1.vue'

export default {
  name: 'CotizaPage',
  components: {
    BannerV1
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        quantity: '',
        material: '',
        specifications: '',
        description: '',
        budget: '',
        files: []
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        service: '',
        quantity: '',
        material: '',
        specifications: '',
        description: '',
        budget: ''
      },
      currentStep: 1,
      totalSteps: 3,
      formSubmitted: false,
      isSubmitting: false
    }
  },
  methods: {
    handleSubmit() {
      // Validate the current step before submission
      if (this.validateCurrentStep()) {
        this.isSubmitting = true;
        
        // Simulate API call with timeout
        setTimeout(() => {
          console.log('Form submitted:', this.form);
          
          // Reset form
          this.form = {
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            quantity: '',
            material: '',
            specifications: '',
            description: '',
            budget: '',
            files: []
          };
          
          this.isSubmitting = false;
          this.formSubmitted = true;
          this.currentStep = 1;
        }, 1500);
      }
    },
    nextStep() {
      if (this.validateCurrentStep()) {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
          window.scrollTo(0, document.getElementById('quote-form').offsetTop - 100);
        }
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        window.scrollTo(0, document.getElementById('quote-form').offsetTop - 100);
      }
    },
    validateCurrentStep() {
      this.errors = {};
      let isValid = true;
      
      if (this.currentStep === 1) {
        if (!this.form.name) {
          this.errors.name = 'El nombre es requerido';
          isValid = false;
        }
        if (!this.form.email) {
          this.errors.email = 'El email es requerido';
          isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(this.form.email)) {
          this.errors.email = 'Por favor ingresa un email válido';
          isValid = false;
        }
        if (!this.form.phone) {
          this.errors.phone = 'El teléfono es requerido';
          isValid = false;
        }
      } else if (this.currentStep === 2) {
        if (!this.form.service) {
          this.errors.service = 'Por favor selecciona un servicio';
          isValid = false;
        }
        if (!this.form.quantity) {
          this.errors.quantity = 'La cantidad es requerida';
          isValid = false;
        }
        if (!this.form.material) {
          this.errors.material = 'Por favor selecciona un material';
          isValid = false;
        }
        if (!this.form.description) {
          this.errors.description = 'La descripción del proyecto es requerida';
          isValid = false;
        }
      } else if (this.currentStep === 3) {
        if (!this.form.budget) {
          this.errors.budget = 'Por favor selecciona un rango de presupuesto';
          isValid = false;
        }
      }
      
      return isValid;
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      this.form.files = [...this.form.files, ...files];
    },
    removeFile(index) {
      this.form.files.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.quote-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.quote-content {
  position: relative;
  z-index: 1;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--content-gray);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--content-primary);
  box-shadow: 0 0 0 3px rgba(var(--content-primary-rgb), 0.15);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--content-gray);
}

.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--content-gray);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  resize: none;
  height: auto;
}

.primary-btn {
  background: var(--content-primary);
  color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 600;
}

.primary-btn:hover {
  background: var(--content-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.primary-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.secondary-btn {
  background: white;
  color: var(--content-primary);
  border: 1px solid var(--content-primary);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 600;
}

.secondary-btn:hover {
  background: var(--content-light);
  transform: translateY(-2px);
}

/* Custom utility classes */
.bg-primary {
  background-color: var(--content-primary);
}

.bg-secondary {
  background-color: var(--content-secondary);
}

.bg-gray {
  background-color: var(--content-gray);
}

.bg-light {
  background-color: var(--content-light);
}

.bg-success-light {
  background-color: rgba(var(--content-success-rgb), 0.15);
}

.text-primary {
  color: var(--content-primary);
}

.text-primary-dark {
  color: var(--content-secondary);
}

.text-dark {
  color: var(--content-dark);
}

.text-gray {
  color: var(--content-gray);
}

.text-success {
  color: var(--content-success);
}

.text-error {
  color: var(--content-error);
}

.text-red-500 {
  color: #f56565;
}

.border-red-500 {
  border-color: #f56565;
}

/* Animation for step transitions */
.space-y-4, .space-y-6 {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .quote-content {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
