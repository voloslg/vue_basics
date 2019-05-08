// Components

Vue.component("Name", {
  data() {
    return { name: "Mike" };
  },
  methods: {
    alertSomething() {
      alert(this.name);
    }
  },
  template: `
    <div>
      <div>{{name}}</div>
      <button @click="alertSomething">Alert</button>
    </div>
  `
});

let app1 = new Vue({
  el: "#app",
  data: {
    name: "Sara"
  },
  methods: {}
});

// Vue with templates
// const template = `<div>{{ name }}</div>`;
// let app1 = new Vue({
//   data: {
//     name: "Sara"
//   },
//   template: template,
//   methods: {}
// });

// setTimeout(() => {
//   // Dynmaicaly mounting Vue instance
//   app1.$mount("#app");
// }, 2000);
