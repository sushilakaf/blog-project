const Post = require("../models/post.js");
const User = require("../models/users.js");

const createPost = async (req, res) => {
  const { body } = req;
  const post = await Post.create({...body});
  res.status(200).send(post);
};
module.exports = {
  createPost,
};
