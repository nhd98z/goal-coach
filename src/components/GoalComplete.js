import React, { Component } from "react";
import { connect } from "react-redux";

import { completeGoalRef } from "../firebase";
import { setCompleted } from "../actions";
import GoalItem from "./GoalItem";

class GoalComplete extends Component {
  componentDidMount() {
    completeGoalRef.on("value", snap => {
      let goals = [];
      // console.log(snap.val());
      for (let e in snap.val()) {
        const { email, title } = snap.val()[e];
        goals = [...goals, { email, title, id: e }];
      }
      this.props.setCompleted(goals);
    });
  }

  _clear = () => {
    completeGoalRef.set([]);
  };

  render() {
    return (
      <div>
        <div>GoalComplete</div>
        {this.props.completeGoals.map((value, index) => {
          return <GoalItem key={index} goal={value} isInCompleteList={true} />;
        })}
        <button onClick={() => this._clear()}>Clear</button>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  // console.log(completeGoals);
  return {
    completeGoals
  };
}

export default connect(
  mapStateToProps,
  { setCompleted }
)(GoalComplete);
