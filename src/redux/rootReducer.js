import { combineReducers } from "@reduxjs/toolkit";
import regionReducer from "./slice/regionSlice";

const rootReducer = combineReducers({
  region: regionReducer,
});

export default rootReducer;
