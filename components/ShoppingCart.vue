<template>
  <transition name="fade">
    <div v-if="isCartVisible" class="cart-overlay" @click.self="toggleCart">
      <transition name="slide-in">
        <div class="cart-modal">
          <div class="cart-header">
            <h2>Shopping Cart</h2>
            <button class="close-btn" @click="toggleCart">&times;</button>
          </div>
          
          <div v-if="cart.length === 0" class="cart-empty">
            <p>Your cart is empty.</p>
          </div>

          <div v-else class="cart-content">
            <div class="cart-items">
              <div v-for="item in cart" :key="item.id" class="cart-item">
                <div class="item-details">
                  <h4>{{ item.name }}</h4>
                </div>
                <div class="item-actions">
                  <input 
                    type="number" 
                    min="1" 
                    :value="item.quantity" 
                    @input="updateQuantity(item.id, $event.target.value)" 
                    class="quantity-input"
                  >
                  <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
                </div>
              </div>
            </div>

            <div class="cart-summary">
              <p><strong>Total Items:</strong> {{ cartItemCount }}</p>
            </div>
          </div>

          <div class="cart-footer">
            <NuxtLink to="/checkout" class="checkout-btn">Proceed to Checkout</NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { useCart } from '~/composables/useCart';

const { 
  cart, 
  isCartVisible, 
  toggleCart, 
  removeItem, 
  updateQuantity: updateCartQuantity, 
  cartItemCount, 
  cartTotal 
} = useCart();

const updateQuantity = (productId, quantity) => {
  const numQuantity = parseInt(quantity, 10);
  if (!isNaN(numQuantity)) {
    updateCartQuantity(productId, numQuantity);
  }
};
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}

.cart-modal {
  width: 100%;
  max-width: 450px;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0,0,0,0.2);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.cart-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.cart-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-empty {
  text-align: center;
  padding: 50px 20px;
  color: #888;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
}

.item-details h4 {
  margin: 0 0 5px 0;
  font-size: 1rem;
}

.item-details p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-input {
  width: 50px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.remove-btn {
  background: none;
  border: none;
  color: #e53e3e;
  cursor: pointer;
  font-weight: bold;
}

.cart-summary {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  text-align: right;
}

.cart-summary p {
  margin: 5px 0;
  font-size: 1.1rem;
}

.cart-footer {
  padding: 20px;
  border-top: 1px solid #eee;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background-color: var(--content-primary, #0056b3);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  text-align: center;
  text-decoration: none;
}

.checkout-btn:hover {
  background-color: var(--content-primary-focus, #004494);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active, .slide-in-leave-active {
  transition: transform 0.3s ease;
}
.slide-in-enter-from, .slide-in-leave-to {
  transform: translateX(100%);
}
</style>
