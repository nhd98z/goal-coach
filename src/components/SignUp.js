import React, { Component } from "react";
import { Link } from "react-router-dom";

import { firebaseApp } from "../firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  _handleClick = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div>
        <div>SIGN UP</div>
        <input
          type="text"
          placeholder="Email"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={this._handleClick}>Sign Up</button>
        <span>or</span>
        <button>
          <Link to="/signin">Sign In</Link>
        </button>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}

export default SignUp;
