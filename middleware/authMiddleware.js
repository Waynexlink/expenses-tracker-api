const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../config/config");
const AppError = require("../utils/appError");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer"))
      return next(new AppError("Not authorized", 401));

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, config.jwtSecret);
    } catch (error) {
      if (error.name == "TokenExpiredError") {
        return next(new AppError("Token expired, please log in again", 401));
      }
      return next(new AppError("Invalid token, please log in again", 401));
    }

    req.user = await User.findById(decoded.userId).select("-password");
    if (!req.user) return next(new AppError("User no longer exists", 401));
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = authMiddleware;
