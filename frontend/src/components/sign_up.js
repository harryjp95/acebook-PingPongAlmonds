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
    const url = "http://localhost:2000/api/v1/users";
    fetch(url, {
      method: "POST",
      body: { user: { email: this.state.email, password: this.state.password } }
    }).then(res => console.log(res));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container" id="sign_up">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div class="form-group col-md-6">
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="form-group col-md-4">
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <input type="text" class="form-control" id="inputZip"/>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary block">Sign Up</button>
        </form>
      </div>
      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     First Name
      //     <br />
      //     <input
      //       type="text"
      //       name="first_name"
      //       value={this.state.first_name}
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <label>
      //     Surname
      //     <br />
      //     <input
      //       type="text"
      //       name="surname"
      //       value={this.state.surname}
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <label>
      //     Email
      //     <br />
      //     <input
      //       type="email"
      //       name="email"
      //       value={this.state.email}
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <label>
      //     Password
      //     <br />
      //     <input
      //       type="password"
      //       name="password"
      //       value={this.state.password}
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <input type="submit" value="Sign Up" />
      // </form>
    );
  }
}

export default SignUp;
