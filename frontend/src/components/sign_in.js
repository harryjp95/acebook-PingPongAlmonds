import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const url = "http://localhost:3000/api/v1/sessions";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(result =>
        this.setState({
          token: result.authentication_token
        })
      );
    const { onSubmit } = this.props;
    onSubmit(this.state.token);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign_in">
        <br />
        <label>
          Email:
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    );
  }
}

export default SignIn;
