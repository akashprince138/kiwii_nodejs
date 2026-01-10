const addMenuValidation = require("../validation/add_menu-validation.js");
const updateMenuValidation = require("../validation/update_menu-validation.js");
const MenuModel = require("../model/menu.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addMenuValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const menuModel = new MenuModel({
      business_id: req.body.business_id,
      name: req.body.name,
      price: req.body.price,
      availability: req.body.availability,
    });

    MenuModel.create(menuModel, (err, data) => {
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
    MenuModel.getAll((err, data) => {
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
    MenuModel.getById(req.params.id, (err, data) => {
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
    const error = updateMenuValidation(data);
    if (error.error) {
      return res.status(400).send({
        message: "error",
        status:400,
        message: error.error.details[0].message,
      });
    }

    const menuModel = new MenuModel({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      availability: req.body.availability,
    });

    MenuModel.update(menuModel, (err, data) => {
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
    MenuModel.delete(req.params.id, (err, data) => {
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
