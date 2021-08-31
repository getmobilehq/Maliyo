import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import studentReducer from "./studentReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  error: errorReducer,
});
