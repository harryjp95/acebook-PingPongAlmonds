import React, { Component } from "react";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null
    };
  }

  returnFeed() {
    if (this.state.feed === null) return "";
    const posts = this.state.feed.map(post => (
      <div className="container">
        <ul className="list-group">
          <li key={post.id} className="list-group-item">
            <div className="media">
              <img
                className="mr-3"
                src="http://placekitten.com/g/64/64"
                alt="Generic placeholder image"
              />
              <div className="media-body">
                <p className="mt-0">James Daniel Malvern</p>
                <p>{post.message}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ));
    return <div>{posts}</div>;
  }

  componentDidMount(event) {
    const url = "http://localhost:3000/api/v1/posts";
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(result => this.setState({ feed: result }));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>{this.returnFeed()}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;
