import loadData from "../../helpers/loadData";

export const SET_BONUSES = "SET_BONUSES";
export const SET_ASSOCIATIONS = "SET_ASSOCIATIONS";
export const SET_ENEMIES = "SET_ENEMIES";

const baseModule = {
  state: {
    bonuses: [],
    associations: [],
    enemies: []
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
    }
  }
};

export default baseModule;
