import { ADD_TO_SQUAD, REMOVE_FROM_SQUAD } from "./modules/squadModule";
import { LOCAL_STORAGE_KEY_SQUAD } from "./localStorageKeys";

export default (mutation, state) => {
  if ([ADD_TO_SQUAD, REMOVE_FROM_SQUAD].includes(mutation.type)) {
    console.log("Storing squad ", state.squad.players);
    localStorage.setItem(
      LOCAL_STORAGE_KEY_SQUAD,
      JSON.stringify(state.squad.players)
    );
  }
};
