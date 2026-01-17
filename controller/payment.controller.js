const addPaymentValidation = require("../validation/add_payment-validation.js");
const updatePaymentValidation = require("../validation/update_payment-validation.js");
const PaymentModel = require("../model/payment.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addPaymentValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const paymentModel = new PaymentModel({
      business_id: req.body.business_id,
      amount: req.body.amount,
      status: req.body.status,
    });

    PaymentModel.create(paymentModel, (err, data) => {
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
    PaymentModel.getAll((err, data) => {
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
    PaymentModel.getById(req.params.id, (err, data) => {
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
    const error = updatePaymentValidation(data);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const paymentModel = new PaymentModel({
      id: req.body.id,
      status: req.body.status,
    });

    PaymentModel.update(paymentModel, (err, data) => {
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
    PaymentModel.delete(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while deleting data.",
          status:false,
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};
