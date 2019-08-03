import Vue from "vue";
import Router from "vue-router";
import Intro from "./views/Intro.vue";
import Init from "./views/Init";
import Help from "./views/Help";
import Start from "./views/game-modules/Start";

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
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/start",
      name: "start",
      component: Start
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
