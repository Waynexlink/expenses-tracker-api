const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
  deleteExpense,
  editExpense,
  getExpense,
  createExpense,
  getExpenses,
} = require("../controller/expensesController");

const router = express.Router();

router.get("/", authMiddleware, getExpenses);
router.post("/", authMiddleware, createExpense);
router.get("/:id", authMiddleware, getExpense);
router.patch("/:id", authMiddleware, editExpense);
router.delete("/:id", authMiddleware, deleteExpense);
module.exports = router;
