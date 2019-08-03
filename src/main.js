import Vue from "vue";
import App from "./App.vue";
import store from "./store/";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  errorCaptured(err, vm, info) {
    console.error(
      `Run time error:\n\n${err.message}\n${err.stack}\n\nComponent: `,
      vm
    );
    this.error = `${err.stack}\n\nfound in ${info} of component`;
    return false;
  }
}).$mount("#app");
