const Expense = require("../models/expensesModel");
const Expenses = require("../models/expensesModel");
const AppError = require("../utils/appError");

const getExpenses = async (req, res, next) => {
  try {
    const { period, from, to, page = 1, limit = 10 } = req.query;
    const query = { user: req.user._id };

    if (period) {
      const periods = {
        lastWeek: Date.now(now.setDate(now.setDate() - 7)),
        lastMonth: Date.now(now.setDate(now.setDate() - 1)),
        last3Month: Date.now(now.setDate(now.setDate() - 3)),
      };
      query.date = { $gte: periods[period] };
    } else if (from && to) {
      query.date = { $gte: new Date(from), $lte: new Date(to) };
    }
    //pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    //fetch Data
    const expense = await Expense.find(query)
      .sort({ date: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    //send response
    const totalExpenses = expense.length;
    if (!totalExpenses) {
      return res.status(200).json({
        status: "success",
        total: totalExpenses,
        page: parseInt(page),
        limit: parseInt(limit),
        data: [],
      });
    }
    res.status(200).json({
      status: "success",
      total: totalExpenses,
      page: parseInt(page),
      limit: parseInt(limit),
      data: expense,
    });
  } catch (error) {
    next(error);
  }
};
const createExpense = async (req, res, next) => {
  try {
    const { title, amount, categories, date } = req.body;
    if (!title || !amount || !categories || !date) {
      return res.status(400).json({
        status: "fail",
        message:
          "Please provide all required fields (title, amount, categories, date)",
      });
    }
    const expense = await Expense.create({
      title,
      amount,
      categories,
      date,
      user: req.user._id,
    });
    res.status(201).json({
      status: "success",
      Message: "Successfully created",
      data: expense,
    });
  } catch (error) {
    next(error);
  }
};

const getExpense = async (req, res, next) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!expense) return next(new AppError("Expense not found ", 404));
    res
      .status(200)
      .json({ status: "success", Message: "Expense retrived", expense });
  } catch (error) {
    next(error);
  }
};
const editExpense = async (req, res, next) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!expense) return next(new AppError("Expense not found ", 404));
    //add req.body to task
    Object.assign(expense, req.body, { new: true, runValidators: true });

    await expense.save();
    res.status(201).json({ status: "success", Message: "Successfully edited" });
  } catch (error) {
    next(error);
  }
};
const deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!expense) return next(new AppError("Expense not found ", 404));

    await expense.deleteOne();
    res
      .status(200)
      .json({ status: "success", Message: "Successfully deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteExpense,
  editExpense,
  getExpense,
  createExpense,
  getExpenses,
};
