const jwt = require("jsonwebtoken");
require("dotenv").config();
const authVerify = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { username: decoded.username };
    return next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "unathorized access, please add token",
    });
  }
};

module.exports = { authVerify };
