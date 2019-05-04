new Vue({
  el: "#app",
  data: {
    user: "Sara",
    userAge: 15,
    allowedAge: 18
  },
  methods: {
    checkUser() {
      return this.user == "Sara" ? true : false;
    }
  }
});
