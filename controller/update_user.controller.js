let UpdateUser = require("../model/update_user.model.js");
const updateUserValidation = require("../validation/update_user-validation.js");
exports.update = (req, res) => {
  try {
    const error = updateUserValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: "error",
        message: error.error.details[0].message,
      });
    }
    const updateUser = new UpdateUser({
      id: req.body.id,
      name: req.body.name,
      // role_id: req.body.role_id,
      status: req.body.status,
    });
    UpdateUser.update(updateUser, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while update User.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
