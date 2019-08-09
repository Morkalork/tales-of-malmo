import loadData from "../../helpers/loadData";

export const START_FIGHTING = "START_FIGHTING";
export const END_FIGHTING = "END_FIGHTING";
export const ADD_FIGHT_SEQUENCE = "ADD_FIGHT_SEQUENCE";
export const CLEAR_FIGHT_SEQUENCES = "CLEAR_FIGHT_SEQUENCES";
export const LOAD_FIGHT_ACTIONS = "LOAD_FIGHT_ACTIONS";

const fightModule = {
  state: {
    isFighting: false,
    actions: [],
    inactions: [],
    sequences: []
  },
  mutations: {
    [START_FIGHTING](state) {
      state.isFighting = true;
    },
    [END_FIGHTING](state) {
      state.isFighting = false;
    },
    [ADD_FIGHT_SEQUENCE](state, sequence) {
      state.sequences.push(sequence);
    },
    [CLEAR_FIGHT_SEQUENCES](state) {
      state.sequences = [];
    },
    [LOAD_FIGHT_ACTIONS](state, data) {
      state.actions = data.actions;
      state.inactions = data.inactions;
    }
  },
  actions: {
    startFighting({ commit }) {
      commit(START_FIGHTING);
    },
    endFighting({ commit }) {
      commit(END_FIGHTING);
    },
    addFightSequence({ commit }, sequence) {
      if (sequence) {
        commit(ADD_FIGHT_SEQUENCE, sequence);
      }
    },
    clearFightSequences({ commit }) {
      commit(CLEAR_FIGHT_SEQUENCES);
    },
    loadFightActions({ commit, dispatch }) {
      loadData("fight-actions", dispatch, result =>
        commit(LOAD_FIGHT_ACTIONS, result)
      );
    }
  }
};

export default fightModule;
