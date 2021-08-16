const express = require("express");
const router = express.Router();
const { authVerify } = require("../middlewares/authVerify");

router.use("/", authVerify);
router.route("/").get((req, res) =>
  res.json({
    name: "Minhaj",
    age: 21,
    pincode: 505001,
    user: req.user,
    token: req.headers.authorization,
  })
);
module.exports = { router };
