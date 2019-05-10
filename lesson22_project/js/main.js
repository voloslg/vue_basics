new Vue({
  el: "#app",
  data: {
    state: true,
    inputName: "",
    names: [],
    showError: false
  },
  methods: {
    addNameToList() {
      if (this.valitate(this.inputName)) {
        console.log("Valid");
        this.names.push(this.inputName);
        // Clear input
        this.inputName = "";
        this.showError = false;
      } else {
        console.log("Not valid");
        this.showError = true;
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
