const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //search database for existing user
    const existingUser = User.findOne({ email });
    if(existingUser) return next(new AppError('User already exist',400))
      
    const newUser = await User.create({name,email,password})
    res.status(201).json({status:"success",message:"User created successfully"})
  } 
};
