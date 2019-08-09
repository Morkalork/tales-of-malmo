import dispatchNetworkError from "../store/modules/helpers/dispatchNetworkError";

export default (fileName, dispatch, onSuccess) => {
  fetch(`/public/data/${fileName}.json`)
    .then(response => response.json())
    .then(onSuccess)
    .catch(() => dispatchNetworkError(dispatch, fileName));
};
