// src/firebase.js

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAwvelHFBwjXpu6BNSQDkXvHkKHk8kUqo8",
  authDomain: "goal-coach-84e1a.firebaseapp.com",
  databaseURL: "https://goal-coach-84e1a.firebaseio.com",
  projectId: "goal-coach-84e1a",
  storageBucket: "goal-coach-84e1a.appspot.com",
  messagingSenderId: "173240604238"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref("goals");
export const completeGoalRef = firebase.database().ref("completeGoals");
