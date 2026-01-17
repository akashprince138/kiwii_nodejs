const addOrdersValidation = require("../validation/add_orders-validation.js");
const updateOrdersValidation = require("../validation/update_orders-validation.js");
const OrdersModel = require("../model/orders.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addOrdersValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const ordersModel = new OrdersModel({
      business_id: req.body.business_id,
      customer_id: req.body.customer_id,
      menu_id: req.body.menu_id,
      quantity: req.body.quantity,
      delivery_status: req.body.delivery_status
    });

    OrdersModel.create(ordersModel, (err, data) => {
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
    OrdersModel.getAll((err, data) => {
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
    OrdersModel.getById(req.params.id, (err, data) => {
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
    const error = updateOrdersValidation(data);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const orderModel = new OrdersModel({
      id: req.body.id,
      customer_id: req.body.customer_id,
      menu_id: req.body.menu_id,
      quantity: req.body.quantity,
      delivery_status: req.body.delivery_status
    });

    OrdersModel.update(orderModel, (err, data) => {
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
    OrdersModel.delete(req.params.id, (err, data) => {
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
