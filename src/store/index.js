import Vue from "vue";
import Vuex from "vuex";
import playerModule from "./modules/playerModule";
import notificationModule from "./modules/notificationModule";
import bonusModule from "./modules/bonusModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    players: playerModule,
    bonuses: bonusModule,
    notification: notificationModule
  }
});
