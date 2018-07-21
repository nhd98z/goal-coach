// src/reducers/user-reducer.js

import { SIGNIN } from "../constants";

let user = {
  email: ""
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNIN:
      const { email } = action;
      user = {
        email
      }
      return user;
    default:
      return state;
  }
};
