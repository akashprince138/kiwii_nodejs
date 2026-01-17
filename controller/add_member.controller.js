let AddMember = require("../model/add_member.model.js");
const addMemberValidation = require("../validation/add_member-validation.js");
exports.create = (req, res) => {
  try {
    const error = addMemberValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: false,
        message: error.error.details[0].message,
      });
    }
    const addMember = new AddMember({
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password,
      role_id: req.body.role_id,
      otp: 123456,
      status: "Active",
      profile_pic: "",
      parent_id: 1,
    });
    AddMember.create(addMember, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while addMember.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
