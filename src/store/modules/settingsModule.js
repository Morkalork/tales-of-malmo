export const ACTIVATE_AUTO_SCROLL = "ACTIVATE_AUTO_SCROLL";
export const DEACTIVATE_AUTO_SCROLL = "DEACTIVATE_AUTO_SCROLL";

const settingsModule = {
  state: {
    isAutoScrollActive: false
  },
  mutations: {
    [ACTIVATE_AUTO_SCROLL](state) {
      state.isAutoScrollActive = true;
    },
    [DEACTIVATE_AUTO_SCROLL](state) {
      state.isAutoScrollActive = false;
    }
  },
  actions: {
    activateAutoScroll({ commit }) {
      commit(ACTIVATE_AUTO_SCROLL);
    },
    deactivateAutoScroll({ commit }) {
      commit(DEACTIVATE_AUTO_SCROLL);
    }
  }
};

export default settingsModule;
