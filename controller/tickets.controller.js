const addTicketValidation = require("../validation/add_ticket-validation.js");
const updateTicketValidation = require("../validation/update_ticket-validation.js");
const TicketModel = require("../model/tickets.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")
exports.create = async (req, res) => {
  try {
    const error = addTicketValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const timestamp = Date.now().toString(36); // base36
    const random = Math.random().toString(36).substring(2, 8);
    const ticketModel = new TicketModel({
      ticket_number: `Ticket-${timestamp}-${random}`.toUpperCase(),
      business_id :req.body.business_id,
      user_id :req.body.user_id,
      subject :req.body.subject,
      description :req.body.description,
      status :req.body.status,
      assigned_to :req.body.assigned_to || null,
    });

    TicketModel.create(ticketModel, (err, data) => {
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
    TicketModel.getAll((err, data) => {
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
    TicketModel.getById(req.params.id, (err, data) => {
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
    const error = updateTicketValidation(data);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }

    const ticketModel = new TicketModel({
      id: req.body.id,
      subject :req.body.subject,
      description :req.body.description,
      status :req.body.status,
      assigned_to :req.body.assigned_to || null,
    });

    TicketModel.update(ticketModel, (err, data) => {
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
