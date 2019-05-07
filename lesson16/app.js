new Vue({
  el: "#app",
  data: {
    user: "",
    active: "",
    loading: false
  },
  // We can do async code
  watch: {
    active(value) {
      console.log("Watch:", value);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  },
  // We can't do async code
  computed: {
    compMessage() {
      return this.user === "Sara" ? "Wellcome" : "Not allowed!";
    }
  },

  methods: {
    isActive() {
      return this.active ? "Active" : "Not Active";
    },
    toggleActive() {
      return (this.active = this.active ? false : true);
    }
  }
});
