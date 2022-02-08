import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Terms & Conditions
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Privacy Policy
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    );
  }
}

export default Footer;
