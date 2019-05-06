new Vue({
  el: "#app",
  data: {
    name: "Sara",
    x: 0,
    y: 0
  },
  methods: {
    updateName() {
      return (this.name = "Tom");
    },
    mouseMove(e) {
      // console.log(e);
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
