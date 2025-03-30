const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../config/config");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer"))
      return next(new AppError("Not authorized", 401));

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, config.jwtSecret);

    req.user = await User.findById(validateToken.userId).select("-password");
    if (!user) return next(new AppError("User no longer exists", 401));
    next();
  } catch (err) {
    next(new AppError("Invalid or expired jwt token", 400));
  }
};

module.exports = authMiddleware;
