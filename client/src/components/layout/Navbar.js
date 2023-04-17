import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper black">
          <Link
            to="/"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo center black-text"
          >
            <span style={{color:"#fff"}}>The Puzzle Application</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar