const addExpenseValidation = require("../validation/add_expense-validation.js");
const updateExpenseValidation = require("../validation/update_expense-validation.js");
const ExpenseModel = require("../model/expense.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addExpenseValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const expenseModel = new ExpenseModel({
      business_id: req.body.business_id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });

    ExpenseModel.create(expenseModel, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while creating data.",
          status:false,
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};

exports.getAll = async (req, res) => {
  try {
    ExpenseModel.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while getting data.",
          status:false,
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};

exports.getById = async (req, res) => {
  try {
    ExpenseModel.getById(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while getting data.",
          status:false,
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};

exports.update = async (req, res) => {
  try {
    const data = req.body;
    const error = updateExpenseValidation(data);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const expenseModel = new ExpenseModel({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });

    ExpenseModel.update(expenseModel, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while updating data.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};

exports.delete = async (req, res) => {
  try {
    ExpenseModel.delete(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while deleting data.",
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};
