import React from "react";

const commentForm = (props) => {
  return (
    <form className="form-group">
      <div className=" container form-group">
        <label for="exampleInputEmail1" className="text-warning ">
          Please Provide Your Comment
        </label>
        <input
          className="form-control container  col-md-4 mb-3 "
          type="text"
          name="author"
          placeholder="Your name…"
          onChange={(event) => {
            props.changedAuthor(event);
          }}
        />
        <textarea
          className="form-control container  col-md-4 mb-3 "
          type="text"
          name="userComment"
          placeholder="Say something..."
          onChange={(event) => {
            props.changedComment(event);
          }}
        />
        <button
          className="form-control  col-md-4 mb-3 btn btn-outline-warning"
          onClick={props.postHandler}
        >
          Add-Comment
        </button>
      </div>
    </form>
  );
};

export default commentForm;
