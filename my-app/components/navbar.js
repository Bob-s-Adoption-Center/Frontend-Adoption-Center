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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dogs
                </a>
              </li>
<<<<<<< HEAD
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
=======
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
>>>>>>> 190fe5f1e9b886baacb638c17dfb0d7a5780fadd
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signin">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Logout
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
