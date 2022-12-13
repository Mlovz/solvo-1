import { api } from "../../api";
import { ALERT_TYPES } from "../types/alertTypes";
import { AUTH_TYPES } from "../types/authTypes";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

    const res = await api.post("/api/login", userData);

    if (res.data) {
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: res.data.user,
          token: res.data.access_token,
        },
      });

      localStorage.setItem("token", res.data.access_token);

      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
    }
  } catch (err) {
    dispatch({
      type: ALERT_TYPES.ERROR,
      payload: err.response.data.msg,
    });
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};
