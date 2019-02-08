import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends Component {
  state = { isSignedIn: false };
  render() {
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
