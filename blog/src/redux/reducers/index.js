import { combineReducers } from "redux";
import auth from "./authReducer";
import articleReducer from "./articleReducer";

export const rootReducer = combineReducers({
  auth,
  articleReducer,
});
