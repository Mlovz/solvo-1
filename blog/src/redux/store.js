import { combineReducers, createStore } from "redux";
import auth from "./reducers/authReducer";
import alert from "./reducers/alertReducer";

const rootReducer = combineReducers({
  auth,
  alert,
});

export const store = createStore(rootReducer);
