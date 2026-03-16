import { defineStore } from 'pinia';

const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    cartTotal: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    itemCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    }
  },
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find((item2) => item2.id === productId);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    clearCart() {
      this.items = [];
    }
  }
});

export { useCartStore as u };
//# sourceMappingURL=cart-DdsaQRJs.mjs.map
