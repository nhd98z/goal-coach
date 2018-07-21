import React, { Component } from "react";
import { connect } from "react-redux";

import { exampleAction } from "../actions";
import { firebaseApp } from "../firebase";
import CreateGoal from "./CreateGoal";
import GoalList from "./GoalList";
import GoalComplete from "./GoalComplete";

class App extends Component {
  componentWillMount() {
    this.props.exampleAction("Nguyên team đi vào hết");
  }

  _signOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <div>
        <div>
          {this.props.status} | Signed in as {this.props.user.email}
          <button onClick={() => this._signOut()}>Sign Out</button>
          <hr />
        </div>
        <CreateGoal />
        <GoalList />
        <GoalComplete />
        <div>SO FAR</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { status, user } = state;
  // console.log("state", state);
  return {
    status,
    user
  };
}

export default connect(
  mapStateToProps,
  { exampleAction }
)(App);
