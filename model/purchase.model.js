const sql = require("../config/db.js");
const Purchase = function (purchase) {
  this.id = purchase.id;
  this.business_id = purchase.business_id;
  this.name = purchase.name;
  this.price = purchase.price;
  this.quantity = purchase.quantity;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Purchase.create = async (newPurchase, result) => {
  sql.query("INSERT  INTO purchases SET ?", newPurchase, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:200 });
          }
        });
};

Purchase.getAll = (result) => {
  sql.query("select * from purchases ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Purchase.getById = (id, result) => {
  sql.query(`SELECT * FROM purchases WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Purchase.update = async (newUpdatePurchase, result) => {
  sql.query(
    "UPDATE purchases SET name = ?, price = ?, quantity = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdatePurchase.name,
      newUpdatePurchase.price,
      newUpdatePurchase.quantity,
      newUpdatePurchase.updatedAt,
      newUpdatePurchase.id,
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

Purchase.delete = async (id, result) => {
  sql.query(`DELETE  FROM purchases WHERE id = ${id}`, (err, res) => {
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

module.exports = Purchase;
