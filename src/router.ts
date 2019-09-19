import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Learn from "./views/Learn.vue";
import Share from "./views/Share.vue";

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
      path: "/learn",
      name: "learn",
      component: Learn
    },
    {
      path: "/share",
      name: "share",
      component: Share
    }
  ]
});
