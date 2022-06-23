import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
class NavbarDogs extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <FontAwesomeIcon
            icon={faPaw}
            style={{ color: "#d3b2d1", marginRight: "5px" }}
          />
          <Link href="/">
            <a className="navbar-brand">
              Bob&apos;s Adoption Center
            </a>
          </Link>
          <button
            className="navbar-toggler navbar-light"
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
                <Link href="/">
                  <a className="nav-link active" aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link active">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link active">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavbarDogs;
