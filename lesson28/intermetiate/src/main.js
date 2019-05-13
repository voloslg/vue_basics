import Vue from "vue";
import App from "./App.vue";

// Include components by global
import Header from "./Components/Header_footer/Header.vue";
Vue.component("app-header", Header);
// Include components by global

new Vue({
  el: "#app",
  render: h => h(App)
});
