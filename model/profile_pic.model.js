const sql = require("../config/db.js");
// const bcrypt = require("bcrypt");
const ProfilePic = function (profilePic) {
  this.id = profilePic.id;
  this.profile_pic = profilePic.profile_pic;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

ProfilePic.create = async (newProfilePic, result) => {
  sql.query(
    "UPDATE users SET profile_pic = ? WHERE id = ?",
    [newProfilePic.profile_pic, newProfilePic.id],
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
module.exports = ProfilePic;
