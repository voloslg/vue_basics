new Vue({
  el: "#app",
  data: {
    redColor: true
  },

  methods: {
    toggleRed() {
      this.redColor = !this.redColor;
    }
  }
});
