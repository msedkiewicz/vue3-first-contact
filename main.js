const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCartAdd(id) {
      this.cart.push(id);
    },
    updateCartRemove(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
