const authVerify = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === "abcdefghi") {
    return next();
  }
  return res.status(401).json({
    success: false,
    message: "unathorized access, please add token",
  });
};

module.exports = { authVerify };
