const addBusinessValidation = require("../validation/add_business-validation.js");
const updateBusinessValidation = require("../validation/update_business-validation.js");
const BusinessModel = require("../model/business.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addBusinessValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const businessModel = new BusinessModel({
      // user_id: req.body.user_id,
      business_name: req.body.business_name,
      owner_name: req.body.owner_name,
      address: req.body.address,
      start_date: req.body.start_date,
      expiry_date: req.body.expiry_date,
      status: Constant.ACTIVE,
    });

    BusinessModel.create(businessModel, (err, data) => {
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
    BusinessModel.getAll((err, data) => {
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
    BusinessModel.getById(req.params.id, (err, data) => {
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
    const error = updateBusinessValidation(data);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const businessModel = new BusinessModel({
      id: req.body.id,
      business_name: req.body.business_name,
      owner_name: req.body.owner_name,
      address: req.body.address,
      status: req.body.status,
    });

    BusinessModel.update(businessModel, (err, data) => {
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
