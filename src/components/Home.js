import React, { Component } from "react";
import firebase from "firebase";

class Home extends Component {
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
                <h1 className="movieDB">SRT Transport Services</h1>
              </td>
              <td />
              <td className="HomeBtnGap" />
              <td className="userdetails">
                <img
                  className="propic"
                  alt=""
                  src={firebase.auth().currentUser.photoURL}
                />
                {firebase.auth().currentUser.displayName}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => firebase.auth().signOut()}
                >
                  Sign out
                </button>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
