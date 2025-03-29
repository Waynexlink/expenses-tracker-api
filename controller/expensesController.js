const Expenses = require("../models/expensesModel");

const getExpenses = async (req, res) => {
  try {
  } catch (error) {
    next(error);
  }
};
const createExpense = async (req, res) => {
  try {
    const {} = req.body;
    const expense = await expense.create({});
    res
      .status(201)
      .json({ status: "success", Message: "Successfully created" });
  } catch (error) {
    next(error);
  }
};

const getExpense = async (req, res) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    res
      .status(200)
      .json({ status: "success", Message: "Successfully deleted", expense });
  } catch (error) {
    next(error);
  }
};
const editExpense = async (req, res) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!expense) return next(new AppError("Expense not found ", 401));
    //add req.body to task
    Object.assign(task, req.body, { new: true, runValidators: true });

    await expense.save();
    res.status(201).json({ status: "success", Message: "Successfully edited" });
  } catch (error) {
    next(error);
  }
};
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!expense) return next(new AppError("Expense not found ", 401));

    await expense.deleteOne();
    res
      .status(200)
      .json({ status: "success", Message: "Successfully deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteExpense, editexpenses };
