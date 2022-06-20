import React, { Component, Fragment } from "react";
// import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">
          <FontAwesomeIcon icon={faPaw} style={{ color: '#d3b2d1', marginRight: '5px' }} />
          <br/>
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Bob's Adoption Center
          </a>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#d3b2d1", backgroundColor: "#d3b2d1"}}
          >
            <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dogs" style={{ color: "white" }}>
                  Dogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.verizon.com/about/news/learn-grow-thrive"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  About us
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/signin"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="/signup"
                >
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
