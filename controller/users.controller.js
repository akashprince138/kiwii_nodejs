let User = require("../model/users.model.js");
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
        status:false,
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  User.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          status:false,
          message: `Not found Users with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          status:false,
          message: "Error retrieving User with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
