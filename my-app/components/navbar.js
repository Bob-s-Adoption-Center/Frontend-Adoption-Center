import React, { Component, Fragment } from "react";
// import styles from "../styles/Home.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bob's Adoption Center
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{fontAlign: 'right'}} href="#">
                  Dogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <a className="nav-link active" style={{color: 'white'}} aria-current="page" href="/signin">
                  Login
                </a>
                </li>
                <li>
                <a className="nav-link" style={{color: 'white'}} aria-current="page" href="/signup">
                  Sign-up
                </a>
                </li>
                </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
