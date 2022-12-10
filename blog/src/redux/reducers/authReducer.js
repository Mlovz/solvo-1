import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
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
    case "ALERT":
      return {
        user: {},
        token: "",
      };

    default:
      return state;
  }
};

export default authReducer;
