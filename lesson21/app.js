new Vue({
  el: "#app",
  data: {
    name: "Mike"
  },
  methods: {
    updateName() {
      this.name = "Sara";
    },
    killIt() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log("Running before create");
  },
  created() {
    console.log("Running created");
  },
  beforeMount() {
    console.log("Running before mount");
  },
  mounted() {
    console.log("Running mounted");
  },
  beforeUpdate() {
    console.log("Running before update");
  },
  updated() {
    console.log("Running updated");
  },
  beforeDestroy() {
    console.log("Running before destroy");
  },
  destroyed() {
    console.log("Running destroyed");
  }
});
