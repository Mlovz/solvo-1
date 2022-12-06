import { combineReducers, createStore } from "redux";

const authState = {
  user: {},
  token: "",
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  authReducer,
});

export const store = createStore(rootReducer);
