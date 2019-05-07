new Vue({
  el: "#app",
  data: {
    colorStyle: "blue",
    redColor: true,
    blueColor: true,
    newStyle: {
      fontSize: "20px",
      border: "5px solid green"
    }
  },

  methods: {
    toggleRed() {
      this.redColor = !this.redColor;
    }
  }
});
