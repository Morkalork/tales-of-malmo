import { NOTIFICATION_TYPES, SET_NOTIFICATION } from "./notificationModule";

export const SET_PLAYERS = "SET_PLAYERS";

const playerModule = {
  state: {
    youth: [],
    standard: [],
    legends: [],
    special: []
  },
  mutations: {
    [SET_PLAYERS](state, loadedPlayers) {
      state.youth = loadedPlayers.filter(player => player.level === 1);
      state.standard = loadedPlayers.filter(player => player.level === 2);
      state.legends = loadedPlayers.filter(player => player.level === 3);
      state.legends = loadedPlayers.filter(player => player.level === 99);
    }
  },
  actions: {
    loadPlayers({ commit }) {
      fetch("/data/players.json2")
        .then(response => response.json())
        .then(players => {
          commit(SET_PLAYERS, players);
        })
        .catch(() =>
          commit(SET_NOTIFICATION, {
            message: "Kunde inte hämta spelardata",
            errorType: NOTIFICATION_TYPES.ERROR
          })
        );
    }
  }
};

export default playerModule;
