const express = require("express");
const {
  validateUser,
  handleValidationError,
} = require("../middleware/validateUser");

const { registerUser, loginUser } = require("../controller/authController");
const router = express.Router();

//handling register and login route
router.post("/register", validateUser, handleValidationError, registerUser);
router.post("/login", loginUser);
module.exports = router;
