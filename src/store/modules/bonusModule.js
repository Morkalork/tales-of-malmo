import { NOTIFICATION_TYPES } from "./notificationModule";

export const SET_BONUSES = "SET_BONUSES";

const bonusModule = {
  state: {
    items: []
  },
  mutations: {
    [SET_BONUSES](state, bonuses) {
      state.items = bonuses;
    }
  },
  actions: {
    loadBonuses({ commit, dispatch }) {
      fetch("/public/data/bonuses.json")
        .then(response => response.json())
        .then(players => {
          commit(SET_BONUSES, players);
        })
        .catch(() =>
          dispatch("setNotification", {
            message:
              "Kunde inte hämta bonusdata, jag har ingen aning om hur jag ska hantera detta... :(",
            notificationType: NOTIFICATION_TYPES.ERROR
          })
        );
    }
  }
};

export default bonusModule;
