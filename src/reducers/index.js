// src/reducers/index.js

import { combineReducers } from "redux";

import status from "./example-reducer";
import user from "./user-reducer";
import goals from "./goals-reducer";
import completeGoals from "./completed-reducer";

export default combineReducers({
  status,
  user,
  goals,
  completeGoals
});
