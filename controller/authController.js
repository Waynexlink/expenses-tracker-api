const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const config = require("../config/config");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //search database for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return next(new AppError("User already exist", 400));

    const newUser = await User.create({ name, email, password });
    res
      .status(201)
      .json({ status: "success", message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //seach database if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new AppError("Invalid email or password", 400));

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return next(new AppError("Invalid email or password", 400));

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ status: " success", message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};
const userData = (req, res) => {
  try {
    const { name, email } = req.user;

    res.status(200).json({
      status: "success",
      message: "Successfully retrived User data",
      data: { email, name },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { registerUser, loginUser, userData };
