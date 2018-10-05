import React, { Component } from "react";
import Navbar from "./navbar";
import Timeline from "./timeline";
import SignUp from "./sign_up";

import "../index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(token) {
    this.setState({ token: token });
  }

  render() {
    var timeLine = null;
    if (this.state.token) timeLine = <Timeline />;
    return (
      <React.Fragment>
        <Navbar onSubmit={this.onFormSubmit} />
        <SignUp />
        {timeLine}
      </React.Fragment>
    );
  }
}

export default App;
