import React, { Component } from "react";
import Axios from "axios";
import "./ShowComment.css";
export default class ShowComment extends Component {
  state = {
    comment: null,
  };

  componentDidMount() {
    Axios.get(`/comments/${this.props.id}`)
      .then((result) => {
        this.setState({
          ...this.state,
          comment: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let result = null;

    if (this.state.comment) {
      result = this.state.comment.map((item) => {
        return (
          <div>
            <p className={"te"}>
              <b>By:</b> {item.author}
              <br />
              <b>Comment:</b> {item.userComment}
              <br />
            </p>
          </div>
        );
      });
    }

    return (
      <div className="show">
        <p className={"te"}>COMMENTS:{result}</p>
      </div>
    );
  }
}
