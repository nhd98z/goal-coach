import React, { Component } from "react";
import { connect } from "react-redux";

import { goalRef, completeGoalRef } from "../firebase";

class ShiftGoalToComplete extends Component {
  _handleClick = () => {
    const { title } = this.props.goal;
    const email = this.props.user.email;
    completeGoalRef.push({ title, email });
    goalRef.child(this.props.goal.id).remove();
  };

  render() {
    const { isInCompleteList } = this.props;
    const CompleteButton = () => {
      return isInCompleteList === false ? (
        <span>
          <button onClick={() => this._handleClick()}>Complete</button>
        </span>
      ) : (
        <span />
      );
    };
    return <CompleteButton />;
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { user } = state;
  return {
    user
  };
}

export default connect(
  mapStateToProps,
  null
)(ShiftGoalToComplete);
