const sql = require("../config/db.js");
const Expense = function (expense) {
  this.id = expense.id;
  this.business_id = expense.business_id;
  this.name = expense.name;
  this.price = expense.price;
  this.quantity = expense.quantity;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Expense.create = async (newExpense, result) => {
  sql.query("INSERT  INTO expenses SET ?", newExpense, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, message: "success",status:200 });
          }
        });
};

Expense.getAll = (result) => {
  sql.query("select * from expenses ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Expense.getById = (id, result) => {
  sql.query(`SELECT * FROM expenses WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};

Expense.update = async (newUpdateExpenses, result) => {
  sql.query(
    "UPDATE expenses SET name = ?, price = ?, quantity = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdateExpenses.name,
      newUpdateExpenses.price,
      newUpdateExpenses.quantity,
      newUpdateExpenses.updatedAt,
      newUpdateExpenses.id,
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

Expense.delete = async (id, result) => {
  sql.query(`DELETE  FROM expenses WHERE id = ${id}`, (err, res) => {
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

module.exports = Expense;
