const sql = require("../config/db.js");
const RatingReview = function (data) {
  this.id = data.id;
  this.rating = data.rating;
  this.review = data.review;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
RatingReview.create = async (newRatingReview, result) => {
  sql.query("INSERT  INTO ratings_reviews SET ?", newRatingReview, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

RatingReview.getAll = (result) => {
  sql.query("select * from ratings_reviews ORDER BY id desc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

RatingReview.getById = (id, result) => {
  sql.query(`SELECT * FROM ratings_reviews WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

RatingReview.update = async (newUpdateRatingReview, result) => {
  sql.query(
    "UPDATE ratings_reviews SET rating = ?, review = ?, updatedAt = ? WHERE id = ?",
    [
      newUpdateRatingReview.rating,
      newUpdateRatingReview.review,
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

module.exports = RatingReview;
