const sql = require("../config/db.js");
const Menu = function (menu) {
  this.id = menu.id;
  this.business_id = menu.business_id;
  this.name = menu.name;
  this.price = menu.price;
  this.availability = menu.availability;
  this.tax = menu.tax;
  this.stock_type = menu.stock_type;
  this.stock_quantity = menu.stock_quantity;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Menu.create = async (newMenu, result) => {
  sql.query("INSERT  INTO menus SET ?", newMenu, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          } else {
            result(null, { data: res, status:true });
          }
        });
};

Menu.getAll = (result) => {
  sql.query("select * from menus ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, status:true });
    }
  });
};

Menu.getById = (id, result) => {
  sql.query(`SELECT * FROM menus WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, status:true });
    }
  });
};

Menu.update = async (newUpdateMenu, result) => {
  sql.query(
    "UPDATE menus SET name = ?, price = ?, availability = ?, tax = ?, stock_type = ?, stock_quantity = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdateMenu.name,
      newUpdateMenu.price,
      newUpdateMenu.availability,
      newUpdateMenu.tax,
      newUpdateMenu.stock_type,
      newUpdateMenu.stock_quantity,
      newUpdateMenu.updatedAt,
      newUpdateMenu.id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, { data: res, status:true });
      }
    }
  );
};

Menu.delete = async (id, result) => {
  sql.query(`DELETE  FROM menus WHERE id = ${id}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          console.log(res);
          result(null, { data: res, status: true });
        }
      });
};

module.exports = Menu;
