import React, { Component } from "react";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyBLZXF9VPLvBDFXD_VKX8yokJ_087JTR6k",
  authDomain: "fire-auth-7dbc0.firebaseapp.com"
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    closeAll: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  };

  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="sample" width="80" src="truck-icon-0.png" />
              </td>
              <td width="10" />
              <td>
                <h1 className="movieDB">SRT Transport</h1>
              </td>
              <td />
              <td className="buttonGap" />
              <td />
            </tr>
          </tbody>
        </table>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button
              className="btn btn-danger"
              onClick={() => firebase.auth().signOut()}
            >
              Sign out!
            </button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Login;
