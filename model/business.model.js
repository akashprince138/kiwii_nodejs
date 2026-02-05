const sql = require("../config/db.js");
const Business = function (business) {
  this.business_type = business.business_type;
  // this.user_id = business.user_id;
  this.business_name = business.business_name;
  this.owner_name = business.owner_name;
  this.gst_number = business.gst_number;
  this.address = business.address;
  this.pin_code = business.pin_code;
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
            result(null, { data: res, message: "success",status:true, });
          }
        });
};

Business.getAll = (result) => {
  sql.query("select business_type, business_name, owner_name, address, start_date, expiry_date, status, pin_code, gst_number from businesses ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
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
      result(null, { data: res, message: "success",status:true });
    }
  });
};

Business.update = async (newUpdateBusiness, result) => {
  sql.query(
    "UPDATE businesses SET business_type = ?,business_name = ?, owner_name = ?, gst_number= ?, address = ?, pin_code = ?, status = ? , updatedAt = ? WHERE id = ?",
    [
      business_type.business_type,
      newUpdateBusiness.business_name,
      newUpdateBusiness.owner_name,
      newUpdateBusiness.gst_number,
      newUpdateBusiness.address,
      newUpdateBusiness.pin_code,
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
        result(null, { data: res, message: "success",status:true });
      }
    }
  );
};

module.exports = Business;
