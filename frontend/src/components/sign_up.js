import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      surname: "",
      email: "",
      password: ""
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

  handleSubmit(event) {
    const url = "http://localhost:3000/api/v1/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: { email: this.state.email, password: this.state.password }
      })
    }).then(res => console.log(res));
    event.preventDefault();
  }
  

  render() {
    return (
      <div className="container" id="sign_up">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} required/>
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="inputSurname" placeholder="Surname" name="surname" value={this.state.surname} onChange={this.handleInputChange} required/>
            </div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} name="password" onChange={this.handleInputChange} required/>
          </div>
          <button type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
