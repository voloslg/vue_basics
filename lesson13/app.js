new Vue({
  el: "#app",
  data: {
    name: "Sara"
  },
  methods: {
    heandleKeyboard(e) {
      console.log(e.target.value);
    }
  }
});
