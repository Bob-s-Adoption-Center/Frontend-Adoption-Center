import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: "black" }}>
              Terms & Conditions
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: "black" }}>
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: "black" }}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: "black" }}>
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: "black" }}>
              About
            </a>
          </li>
        </ul>

        <p className="text-center">© 2022 Company, Inc</p>
      </footer>
    );
  }
}

export default Footer;
