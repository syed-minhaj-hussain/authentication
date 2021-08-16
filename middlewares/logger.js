const logger = (req, res, next) => {
  console.log("Logger Logged");
  next();
};

module.exports = { logger };
