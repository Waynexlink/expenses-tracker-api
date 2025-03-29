const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../config/config");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers("Authorization");
    if (!token) return next(new AppError("Not authorized", 402));

    const validateToken = jwt.verify(
      token.replace("Bearer", ""),
      config.jwtSecret
    );

    req.user = await User.findById(validateToken.userId).select("-password");
    next();
  } catch (err) {
    next(new AppError("Invalid or expired jwt token", 400));
  }
};

module.exports = authMiddleware;
