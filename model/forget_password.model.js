const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.secretkey;
const ForgetPassword = function (forgetPassword) {
  this.phone = forgetPassword.phone;
  this.otp = forgetPassword.otp;
};

ForgetPassword.create = async (newForgetPassword, result) => {
  const query = "UPDATE users SET otp = ? WHERE phone = ?";
  sql.query(
    query,
    [newForgetPassword.otp, newForgetPassword.phone],
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          data: "there is some issue in database.",
          message: "false",
        });
        return;
      } else {
        result(null, {
          status: 200,
          message: "data updated successfully.",
        });
      }
    }
  );
};
module.exports = ForgetPassword;
