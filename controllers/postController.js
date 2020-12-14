var Post = require("../models/post");
const { sanitizeBody } = require("express-validator");

// Display posts in list_posts
exports.index = function (req, res, next) {
  Post.find({}).exec(function (err, list_posts) {
    if (err) {
      return next(err);
    }
    // render if succesful
    res.render("index", { post_list: list_posts });
  });
};

// create posts
exports.create = function (req, res, next) {
  sanitizeBody("*").trim().escape();

  // post object
  var post = new Post({ text: req.body.text, user: req.body.user });

  post.save(function (err) {
    if (err) {
      return next(err);
    }
    // redirect to front page
    res.redirect("/");
  });
};
