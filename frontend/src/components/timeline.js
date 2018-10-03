import React, { Component } from "react";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  returnFeed() {
    if (this.state.feed === null) return "";
    const posts = this.state.feed.map(post => (
      <div className="container">
        <ul className="list-group">
          <li key={post.id} className="list-group-item">
            <h4>{post.user_id}</h4>
            <p>{post.message}</p>
          </li>
        </ul>
      </div>
    ));
    return (
      <div>
        {posts}
      </div>
    );
  }

  handleSubmit(event) {
    const url = "http://localhost:3000/api/v1/posts";
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(result => this.setState({ feed: result }));
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="submit" value="Get Posts" />
            </label>
          </form>
        </div>
        <div>
          <h3>{this.returnFeed()}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;
