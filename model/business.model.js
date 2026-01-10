const sql = require("../config/db.js");
const Business = function (business) {
  this.id = business.id;
  // this.user_id = business.user_id;
  this.business_name = business.business_name;
  this.owner_name = business.owner_name;
  this.address = business.address;
  this.start_date = business.start_date;
  this.expiry_date = business.expiry_date;
  this.status = business.status;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Business.create = async (newBusiness, result) => {
  sql.query("INSERT  INTO businesses SET ?", newBusiness, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:200 });
          }
        });
};

Business.getAll = (result) => {
  sql.query("select * from businesses ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Business.getById = (id, result) => {
  sql.query(`SELECT * FROM businesses WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Business.update = async (newUpdateBusiness, result) => {
  sql.query(
    "UPDATE businesses SET business_name = ?,owner_name = ?,address = ?, status = ? , updatedAt = ? WHERE id = ?",
    [
      newUpdateBusiness.business_name,
      newUpdateBusiness.owner_name,
      newUpdateBusiness.address,
      newUpdateBusiness.status,
      newUpdateBusiness.updatedAt,
      newUpdateBusiness.id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, { data: res, message: "success",status:200 });
      }
    }
  );
};

module.exports = Business;
