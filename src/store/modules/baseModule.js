import dispatchNetworkError from "./helpers/dispatchNetworkError";

export const SET_BONUSES = "SET_BONUSES";
export const SET_ASSOCIATIONS = "SET_ASSOCIATIONS";
export const SET_ENEMIES = "SET_ENEMIES";
export const SET_FIGHT_ACTIONS = "SET_FIGHT_ACTIONS";

const loadData = (fileName, dispatch, onSuccess) => {
  fetch(`/public/data/${fileName}.json`)
    .then(response => response.json())
    .then(onSuccess)
    .catch(() => dispatchNetworkError(dispatch, fileName));
};

const baseModule = {
  state: {
    bonuses: [],
    associations: [],
    enemies: [],
    fightActions: []
  },
  mutations: {
    [SET_BONUSES](state, bonuses) {
      state.bonuses = bonuses;
    },
    [SET_ASSOCIATIONS](state, associations) {
      state.associations = associations;
    },
    [SET_ENEMIES](state, enemies) {
      state.enemies = enemies;
    },
    [SET_FIGHT_ACTIONS](state, fightActions) {
      state.fightActions = fightActions;
    }
  },
  actions: {
    loadBonuses({ commit, dispatch }) {
      loadData("bonuses", dispatch, bonuses => commit(SET_BONUSES, bonuses));
    },

    loadAssociations({ commit, dispatch }) {
      loadData("associations", dispatch, associations =>
        commit(SET_ASSOCIATIONS, associations)
      );
    },
    loadEnemies({ commit, dispatch }) {
      loadData("enemies", dispatch, enemies => commit(SET_ENEMIES, enemies));
    },
    loadFightActions({ commit, dispatch }) {
      loadData("fight-actions", dispatch, fightActions =>
        commit(SET_FIGHT_ACTIONS, fightActions)
      );
    }
  }
};

export default baseModule;
