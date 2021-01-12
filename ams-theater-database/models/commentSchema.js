const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    author: String,
    userComment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", commentSchema);
