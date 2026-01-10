const sql = require("../config/db.js");
const bcrypt = require("bcrypt");
const UpdateUser = function (updateUser) {
  this.id = updateUser.id;
  this.name = updateUser.name;
  // this.role_id = updateUser.role_id;
  this.status = updateUser.status;
  this.updatedAt = new Date();
};

UpdateUser.update = async (newUpdateUser, result) => {
  sql.query(
    "UPDATE users SET name = ?,status = ? WHERE id = ?",
    [
      newUpdateUser.name,
      newUpdateUser.status,
      // newUpdateUser.role_id,
      newUpdateUser.id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, { data: res, message: "success" });
      }
    }
  );
};
module.exports = UpdateUser;
