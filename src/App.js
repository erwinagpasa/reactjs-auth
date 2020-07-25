import React, { Component } from 'react';
import fire from './config/Fire';
import Login from './Login';
import Home from './Home';
import './App.css';




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
  return <div className="App">
    {this.state.user ? (<Home/>) : (<Login/>) }
    </div>;
  }
}

export default App;
