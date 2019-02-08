import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebase/StyleFirebaseAuth";

class App extends Component {
  state = { isSignedIn: false };
  render() {
    return this.state.isSignedIn ? (
      <div> Signed In!</div>
    ) : (
      <div> Not Signed In!</div>
    );
  }
}

export default App;
