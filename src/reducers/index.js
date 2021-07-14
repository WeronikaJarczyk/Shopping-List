import { combineReducers } from "redux";
import userReducer from "./userReducer";
import listReducer from "./listReducer";

export default combineReducers({
  user: userReducer,
  list: listReducer
})

