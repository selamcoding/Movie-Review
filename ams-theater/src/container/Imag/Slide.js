import React, { Component } from "react";
import "./image.css";

export default class Slide extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className=" col-sm-3 pic  carousel slide container"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://4.bp.blogspot.com/-01VrN_YGTc8/XCB7inrKpzI/AAAAAAAACls/ogoVYKxunuwegdmSxm381xVGpDq5GnCdgCLcBGAs/s1600/latest-action-movie-poster-background-download.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.joblo.com/assets/images/oldsite/posters/images/full/pantherposterhandsmain_thumb.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/proxy/KeS-Od6rlAQpF3vcF9RYjQZRWiFuJaDvOXdd8lAAg8PUQSisplm3jCXAcXji_DgN1WepeTNZZlYvRMx0IuqmpDiELLIn6X7yTroDMYQ"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
