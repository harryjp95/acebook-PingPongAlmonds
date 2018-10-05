import React, { Component } from "react";
import SignIn from "./sign_in";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props
    };
  }

  render(props) {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        id="my-primary"
      >
        <a className="navbar-brand" href="#">
          Acebook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <SignIn onSubmit={this.props.onSubmit} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
