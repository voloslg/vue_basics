new Vue({
  el: "#app",
  data: {
    name: "Sara"
  },
  methods: {
    updateName(newName, event) {
      console.log(event);
      return (this.name = newName);
    },
    heanleForm(e) {
      // e.preventDefault();
      console.log("Submit");
    }
  }
});
