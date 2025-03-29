const mongoose = require("mongoose");
const config = require("../config/config");
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connnection error", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
