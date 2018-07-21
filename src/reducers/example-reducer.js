// src/reducers/example-reducer.js

import { EXAMPLE } from "../constants";

export default (state = "", action) => {
  switch (action.type) {
    case EXAMPLE:
      const { status } = action;
      // console.log("action.status", action.status);
      return status;
    default:
      return state;
  }
};
