const sql = require("../config/db.js");
const Ticket = function (data) {
  this.id = data.id;
  this.ticket_number = data.ticket_number;
  this.business_id = data.business_id;
  this.user_id = data.user_id;
  this.subject = data.subject;
  this.description = data.description;
  this.status = data.status;
  this.assigned_to = data.assigned_to;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Ticket.create = async (newRatingReview, result) => {
  sql.query("INSERT  INTO tickets SET ?", newRatingReview, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

Ticket.getAll = (result) => {
  sql.query("select * from tickets ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

Ticket.getById = (id, result) => {
  sql.query(`SELECT * FROM tickets WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

Ticket.update = async (newUpdateRatingReview, result) => {
  sql.query(
    "UPDATE tickets SET subject = ?, description = ?, status = ?, assigned_to = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdateRatingReview.subject,
      newUpdateRatingReview.description,
      newUpdateRatingReview.status,
      newUpdateRatingReview.assigned_to,
      newUpdateRatingReview.updatedAt,
      newUpdateRatingReview.id,
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

module.exports = Ticket;
