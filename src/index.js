// src/index.js
// git add .; git commit -m "ok"; git push origin master; yarn build; yarn start;

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import { firebaseApp } from "./firebase";
import reducer from "./reducers";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import App from "./components/App";
import { signin } from "./actions";
import history from "./history";

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("signed in.");
    const { email } = user;
    store.dispatch(signin(email));
    history.push("/app");
  } else {
    console.log("not sign in");
    history.replace("/signin");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router exact path="/" history={history}>
      <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
