import { NOTIFICATION_TYPES } from "../notificationModule";

export default (dispatch, dataType) => {
  dispatch("setNotification", {
    message: `Kunde inte hämta ${dataType}, jag har ingen aning om hur jag ska hantera detta... :(`,
    notificationType: NOTIFICATION_TYPES.ERROR
  });
};
