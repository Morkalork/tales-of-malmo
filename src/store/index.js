import Vue from "vue";
import Vuex from "vuex";
import playerModule from "./modules/playerModule";
import notificationModule from "./modules/notificationModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    players: playerModule,
    notification: notificationModule
  }
});
