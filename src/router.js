import Vue from "vue";
import Router from "vue-router";
import Intro from "./views/Intro.vue";
import Init from "./views/Init";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro
    },
    {
      path: "/init",
      name: "init",
      component: Init
    }
  ]
});
