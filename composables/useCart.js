import { useState } from '#app';
import { computed } from 'vue';

export const useCart = () => {
  // Define the shared state for the cart
  const cartState = useState('cart', () => []);
  const isCartVisibleState = useState('isCartVisible', () => false);
  const addItem = (product, quantity = 1) => {
    const existingItem = cartState.value.find(item => item.id === product['Item #']);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartState.value.push({
        id: product['Item #'],
        name: product['Product Name'],
        price: product.price || 99.99, // Default price
        quantity: quantity,
      });
    }
  };

  const removeItem = (productId) => {
    const index = cartState.value.findIndex(item => item.id === productId);
    if (index !== -1) {
      cartState.value.splice(index, 1);
    }
  };

  const updateQuantity = (productId, quantity) => {
    const item = cartState.value.find(item => item.id === productId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        removeItem(productId);
      }
    }
  };

  const toggleCart = () => {
    isCartVisibleState.value = !isCartVisibleState.value;
  };

  const cartItemCount = computed(() => {
    return cartState.value.reduce((total, item) => total + item.quantity, 0);
  });

  const cartTotal = computed(() => {
    return cartState.value.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  });

  return {
    cart: cartState,
    isCartVisible: isCartVisibleState,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    cartItemCount,
    cartTotal,
  };
};
