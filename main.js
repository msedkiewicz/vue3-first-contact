const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: true,
    };
  },
  methods: {
    updateCartAdd() {
      this.cart += 1;
    },
    updateCartRemove() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
  },
});
