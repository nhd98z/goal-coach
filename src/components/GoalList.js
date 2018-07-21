import React, { Component } from "react";
import { connect } from "react-redux";

import { goalRef } from "../firebase";
import { setGoals } from "../actions";
import GoalItem from "./GoalItem";

class GoalList extends Component {
  componentDidMount() {
    goalRef.on("value", snap => {
      let goals = [];
      // console.log(snap.val());
      for (let e in snap.val()) {
        const { email, title } = snap.val()[e];
        goals = [...goals, { email, title, id: e }];
      }
      this.props.setGoals(goals);
    });
  }

  _clear = () => {
    goalRef.set([]);
  }

  render() {
    return (
      <div>
        <div>GoalList</div>
        {this.props.goals.map((value, index) => {
          return <GoalItem key={index} goal={value} isInCompleteList={false} />;
        })}
        <button onClick={() => this._clear()}>Clear</button>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  // console.log(goals);
  return {
    goals
  };
}

export default connect(
  mapStateToProps,
  { setGoals }
)(GoalList);
