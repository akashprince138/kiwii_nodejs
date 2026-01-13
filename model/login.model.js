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
    "select id, business_id, name, phone, role_id, status, password from users where phone = " + "'" + newLogin.phone + "'",
    newLogin,
    async (err, res) => {
      // console.log('res', res)
      if (err) {
        console.log("error: ", err);
        result(null, {
          data: "there is some issue in database.",
          message: "false",
        });
        return;
      } else if (res.length === 0) {
        result(null, { data: "phone number does not exist", message: "false" });
      }else if (res[0].status === 'Inactive') {
        result(null, { data: "Your account is deactived.", message: "false" });
      } else {
        sql.query(
          "select status from businesses where id = " + "'" + res[0].business_id + "'",
          newLogin,
          async (err, res1) => {
            // console.log('res1', res1)
            if (err) {
              console.log("error: ", err);
              result(null, {
                data: "there is some issue in database(business table).",
                message: "false",
              });
              return;
            }else if (res1[0].status === 'Inactive') {
              result(null, { data: "Your Business account is deactived.", message: "false" });
            }
          }
        );
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
