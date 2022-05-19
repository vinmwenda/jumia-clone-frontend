import axios from "axios";
//get products
const cloudURL = "https://jumiaclone.herokuapp.com";
const localURl = "https://localhost:5000";
export const productsApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCallBegan") return next(action);

    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: cloudURL,
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

//get list  of delivery location
export const locationApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "getLocation") return next(action);
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: cloudURL,
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };
