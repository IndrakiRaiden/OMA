<template>
  <main class="checkout-page">
    <div class="container mx-auto px-4 py-16">
      <div class="checkout-header text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Please complete the form below to request a quote for the items in your cart.
        </p>
      </div>

      <div class="checkout-content grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Summary -->
        <div class="lg:col-span-1 order-2 lg:order-1">
          <div class="cart-summary bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-4 border-b pb-2">Order Summary</h2>
            
            <div v-if="cart.length === 0" class="empty-cart-message">
              <p class="text-gray-500">Your cart is empty.</p>
              <NuxtLink to="/catalogo" class="back-to-catalog-btn">
                Return to Catalog
              </NuxtLink>
            </div>
            
            <div v-else>
              <div class="cart-items space-y-4 mb-6">
                <div v-for="item in cart" :key="item.id" class="cart-item flex justify-between">
                  <div>
                    <p class="font-medium">{{ item.name }}</p>
                    <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
                  </div>
                </div>
              </div>
              
              <div class="cart-totals border-t pt-4">
                <div class="flex justify-between font-bold">
                  <span>Total Items:</span>
                  <span>{{ cartItemCount }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Checkout Form -->
        <div class="lg:col-span-2 order-1 lg:order-2">
          <div class="checkout-form bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-6">Request Quote</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    v-model="formData.nombre" 
                    class="form-input w-full rounded-md border-gray-300 shadow-sm"
                    required
                  >
                </div>
                
                <div class="form-group">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    class="form-input w-full rounded-md border-gray-300 shadow-sm"
                    required
                  >
                </div>
                
                <div class="form-group">
                  <label for="telefono" class="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    v-model="formData.telefono" 
                    class="form-input w-full rounded-md border-gray-300 shadow-sm"
                    required
                  >
                </div>
                
                <div class="form-group">
                  <label for="empresa" class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    v-model="formData.empresa" 
                    class="form-input w-full rounded-md border-gray-300 shadow-sm"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="tipodeservicio" class="block text-sm font-medium text-gray-700 mb-1">Service Type*</label>
                <select 
                  id="tipodeservicio" 
                  v-model="formData.tipodeservicio" 
                  class="form-select w-full rounded-md border-gray-300 shadow-sm"
                  required
                >
                  <option value="" disabled selected>Select a service type</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Repair">Repair</option>
                  <option value="Custom Design">Custom Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="field" class="block text-sm font-medium text-gray-700 mb-1">Material</label>
                <select 
                  id="field" 
                  v-model="formData.field" 
                  class="form-select w-full rounded-md border-gray-300 shadow-sm"
                >
                  <option value="" disabled selected>Select a material (optional)</option>
                  <option value="Steel">Steel</option>
                  <option value="Aluminum">Aluminum</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="PlanosEspecificaciones" class="block text-sm font-medium text-gray-700 mb-1">
                  Do you have plans or specifications?
                </label>
                <div class="flex space-x-4">
                  <label class="inline-flex items-center">
                    <input 
                      type="radio" 
                      v-model="formData.PlanosEspecificaciones" 
                      value="Yes" 
                      class="form-radio"
                    >
                    <span class="ml-2">Yes</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input 
                      type="radio" 
                      v-model="formData.PlanosEspecificaciones" 
                      value="No" 
                      class="form-radio"
                    >
                    <span class="ml-2">No</span>
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label for="Descripcion" class="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details or Requirements
                </label>
                <textarea 
                  id="Descripcion" 
                  v-model="formData.Descripcion" 
                  rows="4" 
                  class="form-textarea w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Please provide any additional details about your request..."
                ></textarea>
              </div>
              
              <div class="form-group">
                <label for="Presupuesto" class="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range (USD)
                </label>
                <select 
                  id="Presupuesto" 
                  v-model="formData.Presupuesto" 
                  class="form-select w-full rounded-md border-gray-300 shadow-sm"
                >
                  <option value="" disabled selected>Select a budget range (optional)</option>
                  <option value="Less than $1,000">Less than $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
              
              <div class="form-actions">
                <button 
                  type="submit" 
                  class="submit-btn w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Submitting...' : 'Submit Quote Request' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-6 px-8 text-center">
          <div class="success-icon text-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Quote Request Submitted!</h3>
          <p class="mb-6">Thank you for your request. Our team will contact you shortly.</p>
          <button 
            @click="closeSuccessModal" 
            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCart } from '~/composables/useCart';
import PocketBase from 'pocketbase';

definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
});

const { cart, cartItemCount } = useCart();
const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const pb = new PocketBase('https://pocketbase.fiesco.computoespacial.com');

// Form data structure matching the PocketBase 'formulario' collection
const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  tipodeservicio: '',
  Cantidad: '',
  field: '',
  PlanosEspecificaciones: 'No',
  Descripcion: '',
  Presupuesto: ''
});

onMounted(() => {
  // Pre-fill quantity from cart
  formData.value.Cantidad = cartItemCount.value.toString();
  
  // Add cart items to description
  if (cart.value.length > 0) {
    const cartItemsText = cart.value.map(item => 
      `${item.name} (Quantity: ${item.quantity})`
    ).join('\n');
    
    formData.value.Descripcion = `Cart Items:\n${cartItemsText}\n\nAdditional Details:`;
  }
});

const submitForm = async () => {
  try {
    isSubmitting.value = true;
    
    // Create a record in the 'formulario' collection
    await pb.collection('formulario').create(formData.value);
    
    // Show success modal
    showSuccessModal.value = true;
    
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your request. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};

const closeSuccessModal = () => {
  showSuccessModal.value = false;
  // Redirect to catalog page
  navigateTo('/catalogo');
};
</script>

<style scoped>
.checkout-page {
  background-color: #f9f9f9;
  min-height: 100vh;
}

.cart-summary {
  height: fit-content;
  position: sticky;
  top: 20px;
}

.back-to-catalog-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--content-primary, #0056b3);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.back-to-catalog-btn:hover {
  background-color: var(--content-secondary, #004494);
}

.form-input,
.form-select,
.form-textarea {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  width: 100%;
  transition: border-color 0.2s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--content-primary, #0056b3);
  outline: none;
  box-shadow: 0 0 0 1px var(--content-primary, #0056b3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
