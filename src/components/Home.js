import React, { Component } from "react";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    //don't forget to bind -> logout
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
       

        <h1>You are login in! (Home)</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
