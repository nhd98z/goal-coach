import React, { Component } from "react";

import ShiftGoalToComplete from "./ShiftGoalToComplete";

class GoalItem extends Component {
  render() {
    return (
      <div>
        {this.props.goal.title} - {this.props.goal.email}
        <ShiftGoalToComplete
          goal={this.props.goal}
          isInCompleteList={this.props.isInCompleteList}
        />
      </div>
    );
  }
}

export default GoalItem;
