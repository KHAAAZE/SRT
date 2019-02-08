import React, { Component } from "react";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
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
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="sample" width="80" src="green_app_icon.svg" />
              </td>
              <td width="10" />
              <td>
                <h1 className="movieDB">MovieDB Search</h1>
              </td>
              <td />
              <td className="buttonGap" />
              <td>
                <button className="btn btn-success m-3" onClick={this.toggle}>
                  Login
                </button>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Login
          </ModalHeader>
          <ModalBody className="modalLogin">
            {this.state.isSignedIn ? (
              <span>
                <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
