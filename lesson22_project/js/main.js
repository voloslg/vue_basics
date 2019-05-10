new Vue({
  el: "#app",
  data: {
    state: true,
    inputName: "",
    names: []
  },
  methods: {
    addNameToList() {
      if (this.valitate(this.inputName)) {
        console.log("Valid");
      } else {
        console.log("Not valid");
      }
    },
    valitate(value) {
      if (value !== "") {
        return true;
      } else {
        return false;
      }
    }
  }
});
