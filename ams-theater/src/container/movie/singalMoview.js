import React from "react";
import "./s.css";

const Singale = (props) => {
  return (
    <div className=" ">
      <div className="">
        <img
          className=" pic rounded float-left card-img-top"
          src={props.Mimg}
        />
        <div className=" te card-body">
          <h5 className="card-title"> Title : {props.Mtitle}</h5>
          <p className="card-text"> Type : {props.Mtype}</p>
          <p className="card-text"> Year : {props.Myear}</p>
          <p className="card-text"> Company : {props.Mcompany}</p>
          <p className="card-text"> Director : {props.Mdirector}</p>
          <p className="card-text"> Script Writer : {props.MscriptWriter}</p>
          <p className="card-text"> Description : {props.Mdescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Singale;
