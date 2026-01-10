const sql = require("../config/db.js");
const Reports = function (reports) {
  this.id = reports.id;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

Reports.getAll = (result) => {
  sql.query("select * from businesses GROUP BY createdAt", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:200 });
    }
  });
};


module.exports = Reports;
