new Vue({
  el: "#app",
  data: {
    name: "Sara"
  },
  methods: {
    update() {
      setTimeout(() => {
        this.name = "Mike";
      }, 2000);
    }
  }
});
