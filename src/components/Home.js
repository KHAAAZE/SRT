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
                <img alt="sample" width="80" src="Logo.png" />
              </td>
              <td width="10" />
              <td />
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
        <div>
          <div id="page">
            <div id="about">
              <h2>Fixed Full-height Side Nav</h2>
              <h3>
                Try to scroll this area, and see how the sidenav sticks to the
                page
              </h3>
              <p>
                Notice that this div element has a left margin of 25%. This is
                because the side navigation is set to 25% width. If you remove
                the margin, the sidenav will overlay/sit on top of this div.
              </p>
              <p>
                Also notice that we have set overflow:auto to sidenav. This will
                add a scrollbar when the sidenav is too long (for example if it
                has over 50 links inside of it).
              </p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <div id="services">
              <h2>Fixed Full-height Side Nav</h2>
              <h3>
                Try to scroll this area, and see how the sidenav sticks to the
                page
              </h3>
              <p>
                Notice that this div element has a left margin of 25%. This is
                because the side navigation is set to 25% width. If you remove
                the margin, the sidenav will overlay/sit on top of this div.
              </p>
              <p>
                Also notice that we have set overflow:auto to sidenav. This will
                add a scrollbar when the sidenav is too long (for example if it
                has over 50 links inside of it).
              </p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <div id="features">
              <h2>Fixed Full-height Side Nav</h2>
              <h3>
                Try to scroll this area, and see how the sidenav sticks to the
                page
              </h3>
              <p>
                Notice that this div element has a left margin of 25%. This is
                because the side navigation is set to 25% width. If you remove
                the margin, the sidenav will overlay/sit on top of this div.
              </p>
              <p>
                Also notice that we have set overflow:auto to sidenav. This will
                add a scrollbar when the sidenav is too long (for example if it
                has over 50 links inside of it).
              </p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <div id="review">
              <h2>Fixed Full-height Side Nav</h2>
              <h3>
                Try to scroll this area, and see how the sidenav sticks to the
                page
              </h3>
              <p>
                Notice that this div element has a left margin of 25%. This is
                because the side navigation is set to 25% width. If you remove
                the margin, the sidenav will overlay/sit on top of this div.
              </p>
              <p>
                Also notice that we have set overflow:auto to sidenav. This will
                add a scrollbar when the sidenav is too long (for example if it
                has over 50 links inside of it).
              </p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <div id="support">
              <h2>Fixed Full-height Side Nav</h2>
              <h3>
                Try to scroll this area, and see how the sidenav sticks to the
                page
              </h3>
              <p>
                Notice that this div element has a left margin of 25%. This is
                because the side navigation is set to 25% width. If you remove
                the margin, the sidenav will overlay/sit on top of this div.
              </p>
              <p>
                Also notice that we have set overflow:auto to sidenav. This will
                add a scrollbar when the sidenav is too long (for example if it
                has over 50 links inside of it).
              </p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
