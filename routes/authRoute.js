const express = require("express");
const {
  validateUser,
  handleValidationError,
} = require("../middleware/validateUser");
const authMiddleware = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  userData,
} = require("../controller/authController");
const router = express.Router();

//handling register and login route
router.post("/register", validateUser, handleValidationError, registerUser);
router.post("/login", loginUser);
router.post("/me", authMiddleware, userData);
module.exports = router;
