import { combineReducers } from "redux";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";

export const rootReducer = combineReducers({
  authReducer,
  articleReducer,
});
