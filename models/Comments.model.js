const { Schema, model } = require("mongoose");

const CommentsSchema = new Schema({
  title: { type: String, require },
  comment: { type: String, require },
});

const CommentModel = model("Comment", CommentSchema);

module.exports = CommentModel;
