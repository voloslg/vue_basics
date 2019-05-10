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
        this.names.push(this.inputName);
        // Clear input
        console.log(this.names.length);
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
