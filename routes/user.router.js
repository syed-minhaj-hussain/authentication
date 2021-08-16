const express = require("express");
const router = express.Router();
const { logger } = require("../middlewares/logger");

router.use("/", logger);
router
  .route("/")
  .get((req, res) => res.json({ name: "Minhaj", age: 21, pincode: 505001 }));
module.exports = { router };
