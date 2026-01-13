const addCustomerValidation = require("../validation/add_customer-validation.js");
const updateCusomterValidation = require("../validation/update_customer-validation.js");
const CustomerModel = require("../model/customer.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addCustomerValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const customerModel = new CustomerModel({
      business_id: req.body.business_id,
      name :req.body.name,
      phone: req.body.phone,
      order_id:req.body.order_id,
      payment_status: req.body.payment_status,
      payment_status: Constant.PENDING,
      discount_amount: req.body.discount_amount,
    });

    CustomerModel.create(customerModel, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while creating data.",
          message: "error",
          status:500,
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};

exports.getAll = async (req, res) => {
  try {
    CustomerModel.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while getting data.",
          message: "error",
          status:500,
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};

exports.getById = async (req, res) => {
  try {
    CustomerModel.getById(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while getting data.",
          message: "error",
          status:500,
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
    const error = updateCusomterValidation(data);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const customerModel = new CustomerModel({
      id: req.body.id,
      name: req.body.name,
      phone: req.body.phone,
      payment_status: req.body.payment_status,
      discount_amount: req.body.discount_amount,
    });

    CustomerModel.update(customerModel, (err, data) => {
      if (err)
        res.status(500).send({
          message: "error",
          status:500,
          message: err.message || "Some error occurred while updating data.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
