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
        status: false,
        statusCode:400,
        message: error.error.details[0].message,
      });
    }

    const businessModel = new BusinessModel({
      // user_id: req.body.user_id,
      business_name: req.body.business_name,
      owner_name: req.body.owner_name,
      gst_number: req.body.gst_number,
      address: req.body.address,
      status: Constant.ACTIVE,
      start_date:  getTodayDate(),
      expiry_date: getExpiryDate(),
    });

    BusinessModel.create(businessModel, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while creating data.",
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
          status:false,
          message: err.message || "Some error occurred while getting data.",
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
          status:false,
          message: err.message || "Some error occurred while getting data.",
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
        status:false,
        message: error.error.details[0].message,
      });
    }

    const businessModel = new BusinessModel({
      id: req.body.id,
      business_name: req.body.business_name,
      owner_name: req.body.owner_name,
      gst_number:req.body.gst_number,
      address: req.body.address,
      status: req.body.status,
    });

    BusinessModel.update(businessModel, (err, data) => {
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

const getTodayDate = () =>
  new Date().toISOString().split("T")[0];

const getExpiryDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString().split("T")[0];
};
