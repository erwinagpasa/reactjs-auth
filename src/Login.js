import React, { Component } from "react";
import fire from "./config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter email address"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Enter password address"
              onChange={this.handleChange}
              value={this.state.pasword}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={this.login}>
            Login
          </button>
          <a href="/" onClick={this.signup}>
            Signup
          </a>
        </form>
      </div>
    );
  }
}

export default Login;
