import React, { Component } from "react";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Home from "./Home";

class Login extends Component {
  state = { modal: false, cloaseAll: false, isSignedIn: false };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  };

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  };

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
                <img alt="Logo" width="80" src="truck-icon-0.png" />
              </td>
              <td width="10" />
              <td>
                <h1 className="SRT">SRT Transport Services</h1>
              </td>
              <td />
              <td className="LoginBtnGap" />
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
            Login with Email
          </ModalHeader>
          <ModalBody className="modalLogin">
            <div className="App">
              {this.state.isSignedIn ? (
                <Home />
              ) : (
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
