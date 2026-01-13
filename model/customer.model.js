const sql = require("../config/db.js");
const Customer = function (customer) {
  this.id = customer.id;
  this.business_id = customer.business_id;
  this.name = customer.name;
  this.phone = customer.phone;
  this.order_id = customer.order_id;
  this.payment_status = customer.payment_status;
  this.discount_amount = customer.discount_amount;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Customer.create = async (newCustomer, result) => {
  sql.query(
    "select * from customers where phone = " + "'" + newCustomer.phone + "'",
    newCustomer,
    async (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, {
          data: "there is some issue in database.",
          message: "false",
        });
        return;
      } else if (res.length > 0) {
        result(null, { data: null, message: "Phone Number already exist. Try another phone number." });
      } else {
        sql.query("INSERT  INTO customers SET ?", newCustomer, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:200 });
          }
  });
      }
    }
  );
};

Customer.getAll = (result) => {
  sql.query("select * from customers ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Customer.getById = (id, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Customer.update = async (newUpdateCustomer, result) => {
  sql.query(
    "UPDATE customers SET name = ?, phone = ?, payment_status = ?, discount_amount = ? , updatedAt = ? WHERE id = ?",
    [
      newUpdateCustomer.name,
      newUpdateCustomer.phone,
      newUpdateCustomer.payment_status,
      newUpdateCustomer.discount_amount,
      newUpdateCustomer.updatedAt,
      newUpdateCustomer.id,
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

module.exports = Customer;
