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
          isAuth: true,
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

export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

      const res = await api.get("/api/refresh_token");

      console.log(res);

      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: res.data.user,
          token: res.data.access_token,
          isAuth: true,
        },
      });
      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: ALERT_TYPES.ERROR,
        payload: err.response.data.msg,
      });
      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
    }
  }
};

export const register = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });

    const res = await api.post("/api/register", userData);

    if (res.data) {
      navigate("/login");
    }
  } catch (err) {
    dispatch({
      type: ALERT_TYPES.ERROR,
      payload: err.response.data.msg,
    });
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

    const res = await api.get("/api/logout");

    if (res.data) {
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: {},
          token: "",
          isAuth: false,
        },
      });

      localStorage.removeItem("token");
    }
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: ALERT_TYPES.ERROR,
      payload: err.response.data.msg,
    });
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};
