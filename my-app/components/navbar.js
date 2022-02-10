import React, { Component, Fragment } from "react";
// import styles from "../styles/Home.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Bob's Adoption Center
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Dogs">
                  Dogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
