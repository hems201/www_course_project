var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//schema for posts
var PostSchema = new Schema({
  text: { type: String }, //text content
  user: { type: String } //user who posted the post
});

module.exports = mongoose.model("Post", PostSchema);
