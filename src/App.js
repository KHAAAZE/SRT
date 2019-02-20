import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";

firebase.initializeApp({
  apiKey: "AIzaSyBLZXF9VPLvBDFXD_VKX8yokJ_087JTR6k",
  authDomain: "fire-auth-7dbc0.firebaseapp.com"
});

class App extends Component {
  state = { isSignedIn: false };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="App">{this.state.isSignedIn ? <Home /> : <Login />}</div>
    );
  }
}

export default App;
