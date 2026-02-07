const sql = require("../config/db.js");

const OrderItems = {};

OrderItems.createBulk = (items, result) => {
  sql.query(
    `INSERT INTO order_items 
     (order_id, menu_id, menu_name, price, quantity, total, created_at)
     VALUES ?`,
    [items],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { data: res, status: true });
    }
  );
};

OrderItems.getByOrderId = (orderId, result) => {
  sql.query(
    "SELECT * FROM order_items WHERE order_id = ?",
    [orderId],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { data: res, status: true });
    }
  );
};

module.exports = OrderItems;