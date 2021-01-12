import React, { Component } from "react";
import axios from "axios";

import Singal from "../movie/singalMoview";
import CommentForm from "../coment/commentForm";
import "./s.css";
import ShowComment from "../ShowComment/ShowComment";

export default class contSingal extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    axios
      .get(`/Detail/${id}`)
      .then((result) => {
        const dataFromServer = result.data;
        this.setState({
          ...this.state,
          img: dataFromServer.image,
          title: dataFromServer["movie_title"],
          type: dataFromServer["movie_type"],
          year: dataFromServer.year,
          company: dataFromServer.company,
          director: dataFromServer.director,
          scriptWriter: dataFromServer["script_writer"],
          description: dataFromServer.description,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  state = {
    img: null,
    title: null,
    type: null,
    year: null,
    company: null,
    director: null,
    scriptWriter: null,
    description: null,
    user: "",
    userComm: "",
  };

  //comment handler functions
  postCommnethandler = (event) => {
    const newComment = {
      author: this.state.user,
      userComment: this.state.userComm,
    };
    console.log(newComment);
    const id = this.props.match.params.id;
    newComment.id = id;

    axios.post("/comments", newComment).then((data) => {
      console.log(data);
    });
  };

  eventHandleruser = (event) => {
    this.setState({ user: event.target.value });
    console.log(event.target.value);
  };
  eventHandleruserComm = (event) => {
    this.setState({ userComm: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="NewMovie">
          <Singal
            Mimg={this.state.img}
            Mtitle={this.state.title}
            Mtype={this.state.type}
            Myear={this.state.year}
            Mcompany={this.state.company}
            Mdirector={this.state.director}
            MscriptWriter={this.state.scriptWriter}
            Mdescription={this.state.description}
          ></Singal>
        </div>
        <div>
          <ShowComment id={this.props.match.params.id} />
        </div>
        <div className=" left">
          <CommentForm
            changedAuthor={this.eventHandleruser}
            changedComment={this.eventHandleruserComm}
            postHandler={this.postCommnethandler}
          />
        </div>
      </div>
    );
  }
}
