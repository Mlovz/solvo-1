import { AUTH_TYPES } from "../types/authTypes";

const authState = {
  user: {},
  token: "",
  isAuth: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: action.payload.isAuth,
      };

    default:
      return state;
  }
};

export default authReducer;
