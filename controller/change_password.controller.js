let ChangePassword = require("../model/change_password.model.js");
let ForgetPassword = require("../model/forget_password.model.js");
let ResetPassword = require("../model/reset_password.model.js");
const changePasswordValidation = require("../validation/change_password-validation");
const forgetPasswordValidation = require("../validation/forget_password-validation");
const resetPasswordValidation = require("../validation/reset_password-validation");
exports.create = (req, res) => {
  try {
    const error = changePasswordValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }
    const userId = req.user.data.id;
    const changePassword = new ChangePassword({
      password: req.body.password,
      userId: userId,
    });
    ChangePassword.create(changePassword, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while login.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
exports.sendOTP = (req, res) => {
  try {
    const error = forgetPasswordValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }
    let randomNumber = 123456
    const forgetPassword = new ForgetPassword({
      phone: req.body.phone,
      otp: randomNumber,
    });
    ForgetPassword.create(forgetPassword, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while forget password.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
exports.resetPassword = (req, res) => {
  try {
    const error = resetPasswordValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }
    const resetPassword = new ResetPassword({
      phone: req.body.phone,
      otp: req.body.otp,
      password: req.body.password,
    });
    ResetPassword.create(resetPassword, (err, data) => {
      if (err)
        res.status(500).send({
          status:false,
          message: err.message || "Some error occurred while reset password.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
