import React, { Component, Fragment } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
        <ul className="nav justify-content-center">
          <FaFacebook
            className="fa-2x"
            style={{ fontSize: "3em", color: "blue" }}
          />
          <FaLinkedin
            className="fa-2x"
            style={{ fontSize: "3em", color: "0077b6", marginLeft: "0.5em" }}
          />
          <FcGoogle
            className="fa-2x"
            style={{ fontSize: "3em", color: "90e0ef", marginLeft: "0.5em" }}
          />
          <FaTwitter
            className="fa-2x"
            style={{ fontSize: "3em", color: "ade8f4", marginLeft: "0.5em" }}
          />
        </ul>
      </footer>
    );
  }
}
export default Footer;
