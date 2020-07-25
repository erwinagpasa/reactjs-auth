import React, { Component } from "react";
import fire from "./config/Fire";
import Login from "./Login";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    //if the user is not logedin show the sginup page else home
    /* return <div className="App">
    {this.state.user ? (<Home/>) : (<Login/>) }
    </div>;
  */

    return (
      <Router>
        <div>
        <Nav />
        {this.state.user ? (
                <Switch>
                <Route path="/" exact component ={Home} />
                <Route path="/about" component ={About} />
                <Route path="/shop" component ={Shop} />
                </Switch>
        
        ) : (<Login/>) }


      </div>
      </Router>

    );
  }
}


export default App;
