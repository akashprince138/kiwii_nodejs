const sql = require("../config/db.js");

const Orders = function (orders) {
  this.id = orders.id;
  this.business_id = orders.business_id;
  this.menu_id = orders.menu_id; // first menu id
  this.order_no = orders.order_no;
  this.customer_name = orders.customer_name;
  this.customer_mobile = orders.customer_mobile;
  this.subtotal = orders.subtotal;
  this.tax = orders.tax;
  this.discount = orders.discount;
  this.grand_total = orders.grand_total;
  this.order_status = orders.order_status;
  this.payment_method = orders.payment_method;
  this.createdAt = orders.createdAt || new Date();
  this.updatedAt = orders.updatedAt || new Date();
};

Orders.create = (newOrder, result) => {
  sql.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    result(null, { data: res, status: true });
  });
};

Orders.getAll = (result) => {
  sql.query("SELECT * FROM orders ORDER BY id DESC", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { data: res, status: true });
  });
};

Orders.getById = (id, result) => {
  sql.query("SELECT * FROM orders WHERE id = ?", [id], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { data: res[0], status: true });
  });
};

Orders.update = (order, result) => {
  sql.query(
    `UPDATE orders 
     SET order_status = ?, payment_method = ?, updatedAt = ?
     WHERE id = ?`,
    [
      order.order_status,
      order.payment_method,
      new Date(),
      order.id
    ],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { data: res, status: true });
    }
  );
};

module.exports = Orders;