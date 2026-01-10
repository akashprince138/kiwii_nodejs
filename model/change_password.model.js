const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.secretkey;
const ChangePassword = function (changePassword) {
  this.password = changePassword.password;
  this.userId = changePassword.userId;
};

ChangePassword.create = async (newChangePassword, result) => {
  const encryptedPassword = await bcrypt.hash(newChangePassword.password, 10);
  const query = "UPDATE users SET password = ? WHERE id = ?";
  sql.query(
    query,
    [encryptedPassword, newChangePassword.userId],
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
module.exports = ChangePassword;
