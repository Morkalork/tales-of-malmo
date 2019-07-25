export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
export const NOTIFICATION_TYPES = {
  INFO: "Info",
  WARNING: "Varning",
  ERROR: "Fel"
};

const notificationModule = {
  state: {
    title: "",
    message: "",
    notificationType: ""
  },
  mutations: {
    [SET_NOTIFICATION](state, { title, message, notificationType }) {
      console.log("MUTATING!");
      state.title = title || notificationType;
      state.message = message;
      state.notificationType = notificationType;
    },
    [CLEAR_NOTIFICATION](state) {
      state.title = "";
      state.message = "";
      state.notificationType = "";
    }
  },
  actions: {
    setNotification({ commit }, data) {
      console.log("Trying with ", data);
      if (!Object.values(NOTIFICATION_TYPES).includes(data.notificationType)) {
        throw new Error(`Invalid notification type ${!data.notificationType}`);
      }

      console.log("Setting data to ", data);
      commit(SET_NOTIFICATION, data);
    },
    clearNotification({ commit }) {
      commit(CLEAR_NOTIFICATION);
    }
  }
};

export default notificationModule;
