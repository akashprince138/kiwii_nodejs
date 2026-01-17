const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const Signup = function (signup) {
  this.business_id = signup.business_id;
  this.name = signup.name;
  this.phone = signup.phone;
  this.password = signup.password;
  this.role_id = signup.role_id;
  this.status = signup.status;
  this.profile_pic = signup.profile_pic;
  this.parent_id = signup.parent_id;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

Signup.create = async (newSignup, result) => {
  const encryptedPassword = await bcrypt.hash(newSignup.password, 10);
  newSignup.password = encryptedPassword;
  sql.query(
    "select * from users where phone = " + "'" + newSignup.phone + "'",
    newSignup,
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          message: "there is some issue in database.",
          status:false
        });
        return;
      } else if (res.length > 0) {
        result(null, { data: null, message: "Phone Number already exist. Try another phone number.",status:false });
      } else {
        sql.query("INSERT  INTO users SET ?", newSignup, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:true });
          }
        });
      }
    }
  );
};
module.exports = Signup;
