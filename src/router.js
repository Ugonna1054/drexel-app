import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import results from "./views/results.vue";
import details from "./views/details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/results",
      name: "results",
      component: results
    },
    {
      path: "/details",
      name: "details",
      component: details
    }
  ]
});
