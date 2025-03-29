const AppError = require("../utils/appError");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  res.status(500).json({ status: "error", message: "Internal Server Error" });
};

module.exports = errorHandler;
