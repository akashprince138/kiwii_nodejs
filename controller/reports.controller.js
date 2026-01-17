const ReportsModel = require("../model/reports.model.js");
const Constant = require("../common/constant.js")
const Logger = require("../middleware/logger.js")

exports.getAll = async (req, res) => {
  try {
    ReportsModel.getAll((err, data) => {
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
