import dispatchNetworkError from "./helpers/dispatchNetworkError";

export const SET_STORY = "SET_STORY";
export const SET_CURRENT_MAP = "SET_CURRENT_MAP";
export const SET_CURRENT_STAGE = "SET_CURRENT_STAGE";

const storyModule = {
  state: {
    maps: [],
    currentMap: 0,
    currentStage: 0
  },
  mutations: {
    [SET_STORY](state, story) {
      state.maps = story.maps;
    },
    [SET_CURRENT_MAP](state, currentMap) {
      state.currentMap = currentMap;
    },
    [SET_CURRENT_STAGE](state, currentStage) {
      state.currentStage = currentStage;
    }
  },
  actions: {
    loadStory({ commit, dispatch }) {
      fetch("/public/data/story.json")
        .then(response => response.json())
        .then(story => {
          commit(SET_STORY, story);
        })
        .catch(() => dispatchNetworkError(dispatch, "story-data"));
    },
    setCurrentMap({ commit }, currentMap) {
      commit(SET_CURRENT_MAP, currentMap);
    },
    setCurrentStage({ commit }, currentStage) {
      commit(SET_CURRENT_STAGE, currentStage);
    }
  }
};

export default storyModule;
