import React, { Component } from "react";
import { connect } from "react-redux";

import { goalRef } from "../firebase";

class CreateGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  _handleChange = () => {
    console.log("CreateGoal this", this);
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({ title, email });
  };

  render() {
    return (
      <div>
        <div>CreateGoal</div>
        <input
          type="text"
          placeholder="What is the mission"
          onChange={e => this.setState({ title: e.target.value })}
        />
        <button onClick={() => this._handleChange()}>Set</button>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(
  mapStateToProps,
  null
)(CreateGoal);
