const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = express.Router();

const Users = [
  {
    username: "sayuri",
    password: "prerana",
  },
  {
    username: "aman",
    password: "kanishk",
  },
  {
    username: "omkar",
    password: "shivam",
  },
];
router.route("/").post((req, res) => {
  const { username, password } = req.body;
  const findUserByUserName = (username) => {
    return Users.find((user) => user.username === username);
  };
  const user = findUserByUserName(username);
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "user doesnot exist" });
  }
  if (user.username === username && user.password === password) {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return res
      .status(200)
      .json({ success: true, message: "User Logged In Successully", token });
  }
  return res
    .status(401)
    .json({ success: false, message: "Enter Correct Id/Password" });
});

module.exports = { router };
