import { LOCAL_STORAGE_KEY_SQUAD } from "../localStorageKeys";

export const ADD_TO_SQUAD = "ADD_TO_SQUAD";
export const REMOVE_FROM_SQUAD = "REMOVE_FROM_SQUAD";

const storedPlayers = localStorage.getItem(LOCAL_STORAGE_KEY_SQUAD);
const defaultPlayers = (storedPlayers && JSON.parse(storedPlayers)) || [];

const squadModule = {
  state: {
    players: defaultPlayers
  },
  mutations: {
    [ADD_TO_SQUAD](state, player) {
      state.players = [...state.players, player];
    },
    [REMOVE_FROM_SQUAD](state, player) {
      state.players = state.players.filter(p => p.id !== player.id);
    }
  },
  actions: {
    addToSquad({ commit, state }, player) {
      if (!state.players.find(p => p.id === player.id)) {
        commit(ADD_TO_SQUAD, player);
      }
    },
    removeFromSquad({ commit }, player) {
      commit(REMOVE_FROM_SQUAD, player);
    }
  }
};

export default squadModule;
