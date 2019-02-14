import React, { Component } from "react";
import firebase from "firebase";
import GoogleMapReact from "google-map-react";

class Home extends Component {
  static defaultProps = {
    center: {
      lat: 10.667742,
      lng: 122.963136
    },
    zoom: 20
  };
  render() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
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
        <ul className="login">
          <li className="login">
            <a className="loginactive" href="#home">
              Home
            </a>
          </li>
          <li className="login">
            <a className="login" href="#transactions">
              Transactions
            </a>
          </li>
          <li className="login">
            <a className="login" href="#completed">
              Completed
            </a>
          </li>
          <li className="login">
            <a className="login" href="#reports">
              Reports
            </a>
          </li>
          <li className="login">
            <a className="login" href="#trucks">
              Trucks
            </a>
          </li>
          <li className="login">
            <a className="login" href="#users">
              Users
            </a>
          </li>
        </ul>
        <div className="body">
          <h2>Fixed Full-height Side Nav</h2>
          <h3>
            Try to scroll this area, and see how the sidenav sticks to the page
          </h3>
          <p>
            Notice that this div element has a left margin of 25%. This is
            because the side navigation is set to 25% width. If you remove the
            margin, the sidenav will overlay/sit on top of this div.
          </p>
          <p>
            Also notice that we have set overflow:auto to sidenav. This will add
            a scrollbar when the sidenav is too long (for example if it has over
            50 links inside of it).
          </p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <h2>Fixed Full-height Side Nav</h2>
          <h3>
            Try to scroll this area, and see how the sidenav sticks to the page
          </h3>
          <p>
            Notice that this div element has a left margin of 25%. This is
            because the side navigation is set to 25% width. If you remove the
            margin, the sidenav will overlay/sit on top of this div.
          </p>
          <p>
            Also notice that we have set overflow:auto to sidenav. This will add
            a scrollbar when the sidenav is too long (for example if it has over
            50 links inside of it).
          </p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
        </div>
        <div className="body">
          <h2>Fixed Full-height Side Nav</h2>
          <h3>
            Try to scroll this area, and see how the sidenav sticks to the page
          </h3>
          <p>
            Notice that this div element has a left margin of 25%. This is
            because the side navigation is set to 25% width. If you remove the
            margin, the sidenav will overlay/sit on top of this div.
          </p>
          <p>
            Also notice that we have set overflow:auto to sidenav. This will add
            a scrollbar when the sidenav is too long (for example if it has over
            50 links inside of it).
          </p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <h2>Fixed Full-height Side Nav</h2>
          <h3>
            Try to scroll this area, and see how the sidenav sticks to the page
          </h3>
          <p>
            Notice that this div element has a left margin of 25%. This is
            because the side navigation is set to 25% width. If you remove the
            margin, the sidenav will overlay/sit on top of this div.
          </p>
          <p>
            Also notice that we have set overflow:auto to sidenav. This will add
            a scrollbar when the sidenav is too long (for example if it has over
            50 links inside of it).
          </p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
        </div>
        <footer className="footer">
          <div className="row">
            <img alt="Logo" height="70" width="200" src="logo.png" />
            <div className="contact-center">Contact Us</div>
            <div className="contact-left">
              <div className="googleMaps">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyD6RbtueI72xa7qtTTMuZ23h8PAUDJ4F_Q"
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={"Bacolod City"}
                  />
                </GoogleMapReact>
              </div>
            </div>
            <div className="contact-right">
              <div>
                <p className="address">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589" />
                  </svg>
                  #6 Ylac Avenue, Bacolod City, 6100
                </p>
              </div>
              <div>
                <p className="socialMedia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    margin-right="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z" />
                  </svg>
                  +63 433-8704 / 09216666645
                </p>
              </div>
              <div>
                <p className="socialMedia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    margin-right="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.675,0.62H2.327c-0.942,0-1.706,0.764-1.706,1.706v15.348c0,0.941,0.764,1.705,1.706,1.705h15.348c0.941,0,1.705-0.764,1.705-1.705V2.326C19.38,1.384,18.616,0.62,17.675,0.62 M18.526,17.674c0,0.471-0.381,0.852-0.852,0.852H2.327c-0.471,0-0.853-0.381-0.853-0.852V2.326c0-0.471,0.382-0.853,0.853-0.853h15.348c0.471,0,0.852,0.382,0.852,0.853V17.674zM10.849,7.975c0-0.345,0.035-0.531,0.565-0.531h0.709V6.162h-1.134c-1.364,0-1.844,0.642-1.844,1.721v0.834h-0.85V10h0.85v3.838h1.701V10h1.134l0.151-1.283h-1.285L10.849,7.975z" />
                  </svg>
                  www.facebook.com/BacolodLipatBahayTruckForRent
                </p>
              </div>
              <div>
                <p className="socialMedia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    margin-right="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.835,0.438H2.29c-0.954,0-1.727,0.773-1.727,1.727V17.71c0,0.954,0.773,1.728,1.727,1.728h15.545c0.954,0,1.728-0.773,1.728-1.728V2.165C19.562,1.211,18.789,0.438,17.835,0.438 M18.699,17.71c0,0.477-0.388,0.864-0.864,0.864H2.29c-0.477,0-0.863-0.388-0.863-0.864V2.165c0-0.477,0.387-0.863,0.863-0.863h15.545c0.477,0,0.864,0.387,0.864,0.863V17.71zM12.653,5.619H7.472c-0.954,0-1.728,0.773-1.728,1.728v5.182c0,0.954,0.773,1.728,1.728,1.728h5.182c0.954,0,1.728-0.773,1.728-1.728V7.347C14.381,6.393,13.607,5.619,12.653,5.619 M11.79,6.915h1.295V8.21H11.79V6.915z M10.062,8.21c0.954,0,1.728,0.773,1.728,1.727s-0.773,1.728-1.728,1.728c-0.954,0-1.727-0.773-1.727-1.728S9.109,8.21,10.062,8.21M13.518,12.528c0,0.478-0.388,0.863-0.864,0.863H7.472c-0.477,0-0.864-0.386-0.864-0.863V9.505h0.907C7.491,9.647,7.472,9.79,7.472,9.938c0,1.432,1.16,2.591,2.591,2.591c1.432,0,2.591-1.159,2.591-2.591c0-0.148-0.02-0.291-0.044-0.432h0.908V12.528z" />
                  </svg>
                  www.instagram.com/BacolodLipatBahayTruckForRent
                </p>
              </div>
              <div>
                <p className="opHrs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    margin-right="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412" />
                  </svg>
                  <b>OPERATING HOURS:</b>
                </p>
                <p className="opTime"> Monday to Friday</p>
                <p className="opTimes"> 8:00 AM to 10:00 PM</p>
                <p className="opTime"> Saturday to Sunday</p>
                <p className="opTimes"> 11:00 AM to 8:00 PM</p>{" "}
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
