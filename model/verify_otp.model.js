const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.secretkey;
const Login = function (login) {
  this.phone = login.phone;
  this.otp = login.otp;
};

Login.create = async (newLogin, result) => {
  let query = "select * from users where phone = " + "'" + newLogin.phone + "' AND " + "otp = '" + newLogin.otp + "'";
  sql.query(
    query,
    newLogin,
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          message: "there is some issue in database.",
          status:false
        });
        return;
      } else if (res.length === 0) {
        result(null, { message: "OTP is expired.", status:false });
      } else {
        result(null, { data: res[0], message: "success", status:true });
      }
    }
  );
};
module.exports = Login;
