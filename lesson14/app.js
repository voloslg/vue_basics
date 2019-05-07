new Vue({
  el: "#app",
  data: {
    formData: {
      name: "",
      lastName: "",
      age: ""
    }
  },
  methods: {
    formHandler() {
      console.log(this.formData);
    }
  }
});
