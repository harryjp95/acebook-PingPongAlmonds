import React, { Component } from "react";
import Navbar from "./navbar"
import Timeline from "./timeline";
import SignIn from "./sign_in"
import SignUp from "./sign_up"

import "../index.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SignUp />
        <Timeline />
      </React.Fragment>
    );
  }
}

export default App;
