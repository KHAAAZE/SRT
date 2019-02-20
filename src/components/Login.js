/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Home from "./Home";
import About from "../sections/About.js";
import Features from "../sections/Features.js";
import Review from "../sections/Rev.js";
import Services from "../sections/Services.js";
import Support from "../sections/Support.js";
import Footer from "./Footer.js";

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
      signInSuccessWithAuthResult: () => false
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
                <img alt="Logo" width="80" src="logo.png" />
              </td>
              <td width="10" />
              <td />
              <td />
              <td className="LoginBtnGap" />
              <td className="userdetails">
                <img className="loginpropic" alt="" src="color.png" />
              </td>
              <td>
                <button className="btn btn-success" onClick={this.toggle}>
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
            Login with Email{" "}
          </ModalHeader>
          <ModalBody className="modalLogin">
            {this.state.isSignedIn ? (
              <Home />
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </ModalBody>
        </Modal>
        <div>
          <ul className="rightsidebar">
            <li className="rightsidebar">
              <a className="rightsidebar" href="#about">
                About
              </a>
            </li>
            <li className="rightsidebar">
              <a className="rightsidebar" href="#services">
                Services
              </a>
            </li>
            <li className="rightsidebar">
              <a className="rightsidebar" href="#features">
                Features
              </a>
            </li>

            <li className="rightsidebar">
              <a className="rightsidebar" href="#review">
                Reviews
              </a>
            </li>
            <li className="rightsidebar">
              <a className="rightsidebar" href="#support">
                Support
              </a>
            </li>
            <li className="rightsidebar">
              <a className="rightsidebar" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="page">
          <About id="about" />
          <Services id="services" />
          <Features id="features" />
          <Review id="review" />
          <Support id="support" />
        </div>
        <Footer id="contact" />
      </div>
    );
  }
}

export default Login;
