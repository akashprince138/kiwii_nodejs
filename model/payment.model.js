const sql = require("../config/db.js");
const Payment = function (purchase) {
  this.id = purchase.id;
  this.business_id = purchase.business_id;
  this.amount = purchase.amount;
  this.status = purchase.status;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Payment.create = async (newPayment, result) => {
  sql.query("INSERT  INTO payments SET ?", newPayment, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:200 });
          }
        });
};

Payment.getAll = (result) => {
  sql.query("select * from payments ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Payment.getById = (id, result) => {
  sql.query(`SELECT * FROM payments WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Payment.update = async (newUpdatePayment, result) => {
  sql.query(
    "UPDATE payments SET amount = ?, status = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdatePayment.amount,
      newUpdatePayment.status,
      newUpdatePayment.updatedAt,
      newUpdatePayment.id,
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

Payment.delete = async (id, result) => {
  sql.query(`DELETE  FROM payments WHERE id = ${id}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          console.log(res);
          result(null, { data: res, message: "success" });
        }
      });
};

module.exports = Payment;
