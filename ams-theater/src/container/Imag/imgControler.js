import React, { Component } from "react";
import Image from "./imageCard";
import { connect } from "react-redux";
import { GetDatafromServer } from "../../Store/actions/action";

import Slide from "../Imag/Slide";
import "./image.css";

class ImageRab extends Component {
  componentDidMount() {
    this.props.show();
  }

  render() {
    return (
      <div>
      <div className="">
  <Slide />
      </div>
      
        <div className="con">
          {this.props.data.map((item) => {
            return (
              <Image
                key={item["_id"]}
                id={item["_id"]}
                movieTitle={item["movie_title"]}
                image={item.image}
                year={item.year}
                movieType={item["movie_type"]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    move: state.movieReducer.movie,
    data: state.movieReducer.data,
  };
};

const mapStateDispatchToProps = (dispatch) => {
  return {
    show: () => dispatch(GetDatafromServer()),
  };
};

export default connect(mapStatetoProps, mapStateDispatchToProps)(ImageRab);
