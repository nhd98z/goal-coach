import React, { Component } from "react";
import { Link } from "react-router-dom";

import { firebaseApp } from "../firebase";

class SignIn extends Component {
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
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div>
        <div>SIGN IN</div>
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
        <button onClick={this._handleClick}>Sign In</button>
        <span>or</span>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}

export default SignIn;
