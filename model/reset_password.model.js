const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.secretkey;
const ResetPassword = function (resetPassword) {
  this.phone = resetPassword.phone;
  this.otp = resetPassword.otp;
  this.password = resetPassword.password;
};

ResetPassword.create = async (newResetPassword, result) => {
  const query = "UPDATE users SET password = ? WHERE phone = ? ANd otp = ?";
  sql.query(
    query,
    [ResetPassword.password, ResetPassword.phone, ResetPassword.otp],
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          message: "there is some issue in database.",
          status:false
        });
        return;
      } else {
        result(null, {
          status: true,
          message: "data updated successfully.",
        });
      }
    }
  );
};
module.exports = ResetPassword;
