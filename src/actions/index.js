// src/actions/index.js

import { EXAMPLE, SIGNIN, SET_GOALS, SET_COMPLETED } from "../constants";

const exampleAction = status => ({
  type: EXAMPLE,
  status
});

const signin = email => ({
  type: SIGNIN,
  email
});

const setGoals = goals => ({
  type: SET_GOALS,
  goals
});

const setCompleted = completeGoals => ({
  type: SET_COMPLETED,
  completeGoals
});

export { exampleAction, signin, setGoals, setCompleted };
