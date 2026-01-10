const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretkey = process.env.secretkey;
const Login = function (login) {
  this.phone = login.phone;
  this.password = login.password;
};

Login.create = async (newLogin, result) => {
  sql.query(
    "select id, name, phone, role_id, password from users where phone = " + "'" + newLogin.phone + "'",
    newLogin,
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          data: "there is some issue in database.",
          message: "false",
        });
        return;
      } else if (res.length === 0) {
        result(null, { data: "phone number does not exist", message: "false" });
      } else {
        const comparision = await bcrypt.compare(
          newLogin.password,
          res[0].password
        );
        delete res[0].password
        if (comparision) {
          var token = jwt.sign({ data: res[0] }, secretkey, {
            expiresIn: 86400, // expires in 24 hours
          });
          result(null, { data: res[0], message: "success", token: token });
        } else {
          result(null, { data: "phone/Password mismatch.", message: "false" });
        }
      }
    }
  );
};
module.exports = Login;
