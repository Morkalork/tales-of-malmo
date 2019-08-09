import Vue from "vue";
import Vuex from "vuex";
import playerModule from "./modules/playerModule";
import notificationModule from "./modules/notificationModule";
import baseModule from "./modules/baseModule";
import storyModule from "./modules/storyModule";
import storePersistence from "./storePersistence";
import squadModule from "./modules/squadModule";
import fightModule from "./modules/fightModule";
import settingsModule from "./modules/settingsModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  ...baseModule,
  modules: {
    story: storyModule,
    players: playerModule,
    notification: notificationModule,
    squad: squadModule,
    fight: fightModule,
    settings: settingsModule
  }
});

store.subscribe(storePersistence);

export default store;
