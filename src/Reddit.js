import React from "react";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1>Message from Reddit Class</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              {" "}
              <a href={post.url} target="blank">
                {post.title}
              </a>
              <div>{post.title.length}</div>
              <p>Score: {post.score}</p>
              <p>Submmit User: {post.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Reddit;
