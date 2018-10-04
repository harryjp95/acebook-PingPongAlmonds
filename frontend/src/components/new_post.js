import React, { Component } from "react";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: ""
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
    event.preventDefault();
    const url = "http://localhost:3000/api/v1/posts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: this.state.message
      })
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What's on your mind?
          <br />
          <textarea
            rows="4"
            cols="50"
            name="message"
            id="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default NewPost;
