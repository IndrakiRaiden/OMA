import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isCartVisible: false,
  }),

  getters: {
    cartItemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },

  actions: {
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product['Item #']);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ 
          id: product['Item #'], 
          name: product['Product Name'], 
          quantity: quantity,
        });
      }
    },

    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          this.removeItem(productId);
        }
      }
    },

    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
  },
});
