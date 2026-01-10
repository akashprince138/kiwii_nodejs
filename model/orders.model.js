const sql = require("../config/db.js");
const Orders = function (orders) {
  this.id = orders.id;
  this.business_id = orders.business_id;
  this.customer_id = orders.customer_id;
  this.menu_id = orders.menu_id;
  this.quantity = orders.quantity;
  this.delivery_status = orders.delivery_status;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Orders.create = async (newOrders, result) => {
  sql.query("INSERT  INTO orders SET ?", newOrders, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:200 });
          }
        });
};

Orders.getAll = (result) => {
  sql.query("select * from orders ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Orders.getById = (id, result) => {
  sql.query(`SELECT * FROM orders WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Orders.update = async (newUpdateOrders, result) => {
  sql.query(
    "UPDATE orders SET business_id = ?,customer_id = ?, menu_id = ?, quantity = ?, delivery_status = ? , updatedAt = ? WHERE id = ?",
    [
      newUpdateOrders.business_id,
      newUpdateOrders.customer_id,
      newUpdateOrders.menu_id,
      newUpdateOrders.quantity,
      newUpdateOrders.delivery_status,
      newUpdateOrders.updatedAt,
      newUpdateOrders.id,
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

Orders.delete = async (id, result) => {
  sql.query(`DELETE FROM orders WHERE id = ${id}`, (err, res) => {
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

module.exports = Orders;
