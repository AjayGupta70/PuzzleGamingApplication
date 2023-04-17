import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper" style={{height:"90vh", backgroundColor:"#ddc2c2"}} >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              {/* <b>Build</b> a login/auth app with the{" "} */}
              <span style={{ fontFamily: "monospace" }}>SWAP</span> to correct PuZzLe
            </h4>
            <p className="flow-text grey-text text-darken-1">
              A puzzle game created using MERN, to access multiple soft skills of the players.            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "30px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable red accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "30px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-light hoverable red white-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
