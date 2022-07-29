const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/users.js");

const signup = async (req, res) => {
  const user = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 9),
  };
  try {
    const create_user = await User.create(user);
    res.status(201).send(create_user);
  } catch (err) {
    return res.status(400).send({ message: "user already exist" });
  }
};

const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user === null)
    return res.status(400).send({ message: "user doesn't exist" });

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  
  if (!passwordIsValid)
    return res.status(400).send({ message: "password is incorrect" });
};

module.exports = {
  signup,
  signin,
};
