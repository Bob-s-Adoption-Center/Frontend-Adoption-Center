import React, { Component, Fragment } from "react";
// import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">
          <FontAwesomeIcon
            icon={faPaw}
            style={{ color: "#d3b2d1", marginRight: "5px" }}
          />
          <br />
          <Link href="#">
            <a className="navbar-brand" style={{ color: "white" }}>Bob&apos;s Adoption Center</a>
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#d3b2d1", backgroundColor: "#d3b2d1" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "white" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" style={{ color: "white" }} aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Dogs">
                  <a className="nav-link" style={{ color: "white" }}>Dogs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://www.verizon.com/about/news/learn-grow-thrive">
                  <a className="nav-link" target="_blank" style={{ color: "white" }} rel="noreferrer">About us</a>
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <Link href="/signin">
                  <a className="nav-link active" style={{ color: "white" }} aria-current="page">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="nav-link active" style={{ color: "white" }} aria-current="page" rel="noreferrer">Sign-up</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
