import { combineReducers } from "redux";
import user from "./userReducers";
import product from "./product";
// import userjob from "./userJobReducer";

export default combineReducers({
  user, product
});