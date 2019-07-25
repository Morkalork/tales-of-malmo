import { NOTIFICATION_TYPES } from "./notificationModule";

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
    loadPlayers({ commit, dispatch }) {
      fetch("/public/data/players.json")
        .then(response => response.json())
        .then(players => {
          commit(SET_PLAYERS, players);
        })
        .catch(() =>
          dispatch("setNotification", {
            message:
              "Kunde inte hämta spelardata, jag har ingen aning om hur jag ska hantera detta... :(",
            notificationType: NOTIFICATION_TYPES.ERROR
          })
        );
    }
  }
};

export default playerModule;
