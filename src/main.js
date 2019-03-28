import Vue from "vue";
import App from "./App.vue";

// Back-end API
import VueResource from "vue-resource";

Vue.use(VueResource);

// UI components and styling
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// Routing
import VueRouter from "vue-router";
import { routes } from "./config/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// Components
import Navbar from "./components/layout/Navbar.vue";
import Landing from "./components/layout/Landing.vue";
import Footer from "./components/layout/Footer.vue";

Vue.component("app-navbar", Navbar);
Vue.component("app-landing", Landing);
Vue.component("app-footer", Footer);

// Directives

// Vuex store
import { store } from "./store/store";

// Vue instantiation and setup
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
