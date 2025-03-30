const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  categories: {
    type: String,
    requires: true,
    enum: [
      ("Housing",
      "Food",
      "Transportation",
      "Health",
      "Shopping",
      "Entertainment",
      "Debt Payments",
      "Savings & Investments",
      "Personal Care",
      "Miscellaneous"),
    ],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User",
    required: true,
  },
});

const Expense = mongoose.model("Expenses", expenseSchema);

module.exports = Expense;
