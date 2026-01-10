let Signup = require("../model/signup.model.js");
const signupValidation = require("../validation/signup-validation.js");
exports.create = (req, res) => {
  try {
    const error = signupValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: "error",
        message: error.error.details[0].message,
      });
    }
    const signup = new Signup({
      business_id: req.body.business_id,
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password,
      role_id: req.body.role_id,
      status: "Active",
      profile_pic: "",
      parent_id: 1,
    });
    Signup.create(signup, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while Signup.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
