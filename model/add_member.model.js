const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const AddMember = function (addMember) {
  this.name = addMember.name;
  this.phone = addMember.phone;
  this.password = addMember.password;
  this.role_id = addMember.role_id;
  this.otp = addMember.otp;
  this.status = addMember.status;
  this.profile_pic = addMember.profile_pic;
  this.parent_id = addMember.parent_id;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

AddMember.create = async (newAddMember, result) => {
  const encryptedPassword = await bcrypt.hash(newAddMember.password, 10);
  newAddMember.password = encryptedPassword;
  sql.query(
    "select * from users where phone = " + "'" + newAddMember.phone + "'",
    newAddMember,
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          data: "there is some issue in database.",
          message: "false",
        });
        return;
      } else if (res.length > 0) {
        result(null, { data: null, message: "Phone Number already exist." });
      } else {
        sql.query("INSERT  INTO users SET ?", newAddMember, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success" });
          }
        });
      }
    }
  );
};
module.exports = AddMember;
