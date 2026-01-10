const updateReferralValidation = require("../validation/update_referral-validation.js");
const addReferralValidation = require("../validation/add_referral-validation.js");
let ReferralData = require("../model/referral.model.js");
exports.getAll = async (req, res) => {
  try {
    ReferralData.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while deleting referral.",
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};
exports.getById = async (req, res) => {
  try {
    ReferralData.getById(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while deleting referral.",
        });
      else res.send(data);
    });
  } catch (err) {
    console.log("error", err);
  }
};
exports.create = async (req, res) => {
  try {
    const error = addReferralValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: "error",
        message: error.error.details[0].message,
      });
    }
    const referralData = new ReferralData({
      business_id: req.body.business_id,
      referral_code: req.body.referral_code,
      status: 'active'
    });

    ReferralData.create(referralData, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while creating referral.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
exports.update = async (req, res) => {
  try {
    const data = req.body;
    const error = updateReferralValidation(data);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const referralData = new ReferralData({
      id: req.body.id,
      referral_code:req.body.referral_code,
      status: req.body.status,
    });

    ReferralData.update(referralData, (err, data) => {
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
