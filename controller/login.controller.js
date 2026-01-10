let Login = require("../model/login.model.js");
let LoginOTP = require("../model/login_otp.model.js");
let VerifyOTP = require("../model/verify_otp.model.js");
const loginValidation = require("../validation/login-validation");
const loginOTPValidation = require("../validation/login_otp-validation");
const verifyOTPValidation = require("../validation/verify_otp-validation");
exports.create = (req, res) => {
  try {
    const error = loginValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: "error",
        message: error.error.details[0].message,
      });
    }
    const login = new Login({
      phone: req.body.phone,
      password: req.body.password,
    });
    Login.create(login, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while login.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
exports.createOTP = (req, res) => {
  try {
    const error = loginOTPValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: "error",
        message: error.error.details[0].message,
      });
    }
    const loginOTP = new LoginOTP({
      phone: req.body.phone,
    });
    LoginOTP.create(loginOTP, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while getting OTP.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
exports.verifyOTP = (req, res) => {
  try {
    const error = verifyOTPValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status: "error",
        message: error.error.details[0].message,
      });
    }
    const verifyOTP = new VerifyOTP({
      phone: req.body.phone,
      otp: req.body.otp,
    });
    VerifyOTP.create(verifyOTP, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while verifying OTP.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
