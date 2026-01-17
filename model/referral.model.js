const sql = require("../config/db.js");
const AddReferral = function (referral) {
  this.id = referral.id;
  this.business_id = referral.business_id;
  this.referral_code = referral.referral_code;
  this.status = referral.status;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
AddReferral.getAll = async (result) => {
  sql.query(`SELECT * FROM referrals ORDER BY id desc`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};
AddReferral.getById = async (id, result) => {
  sql.query(`SELECT * FROM referrals WHERE id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};
AddReferral.create = async (newAddReferral, result) => {
  sql.query("INSERT  INTO referrals SET ?", newAddReferral, (err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};
AddReferral.update = async (newUpdateReferral, result) => {
  sql.query(
    "UPDATE referrals SET referral_code = ?, status = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdateReferral.referral_code,
      newUpdateReferral.status,
      newUpdateReferral.updatedAt,
      newUpdateReferral.id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, { data: res, message: "success",status:true });
      }
    }
  );
};
module.exports = AddReferral;
