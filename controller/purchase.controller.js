const addPurchaseValidation = require("../validation/add_purchase-validation.js");
const updatePurchaseValidation = require("../validation/update_purchase-validation.js");
const PurchaseModel = require("../model/purchase.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addPurchaseValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const purchaseModel = new PurchaseModel({
      business_id: req.body.business_id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });

    PurchaseModel.create(purchaseModel, (err, data) => {
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
    PurchaseModel.getAll((err, data) => {
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
    PurchaseModel.getById(req.params.id, (err, data) => {
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
    const error = updatePurchaseValidation(data);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const purchaseModel = new PurchaseModel({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });

    PurchaseModel.update(purchaseModel, (err, data) => {
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

exports.delete = async (req, res) => {
  try {
    PurchaseModel.delete(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while deleting data.",
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};
