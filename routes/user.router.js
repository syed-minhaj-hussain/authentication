const express = require("express");
const router = express.Router();
const { authVerify } = require("../middlewares/authVerify");

router.use("/", authVerify);
router.route("/").get((req, res) => {
  const {
    user: { _id },
  } = req;
  res.json({
    name: "Minhaj",
    _id,
    age: 21,
    pincode: 505001,
    user: req.user,
    token: req.headers.authorization,
  });
});
module.exports = { router };
