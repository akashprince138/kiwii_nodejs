const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.secretkey;
const Login = function (login) {
  this.phone = login.phone;
};

Login.create = async (newLogin, result) => {
  sql.query(
    "select otp,phone from users where phone = " + "'" + newLogin.phone + "'",
    newLogin,
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          message: "there is some issue in database.",
          status: false,
        });
        return;
      } else if (res.length === 0) {
        result(null, { data: "phone number does not exist", message: "false", status: false });
      } else {
        result(null, { data: res[0], message: "success",status:true });
      }
    }
  );
};
module.exports = Login;
