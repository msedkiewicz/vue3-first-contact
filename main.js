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
    updateCartRemove() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
  },
});
