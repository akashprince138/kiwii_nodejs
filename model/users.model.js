const sql = require("../config/db.js");
const User = function (user) {
  // this.id = user.id;
  // this.name = user.name;
  // this.role_id = user.role_id;
  // this.status = user.status;
  // this.updatedAt = new Date();
};

User.getAll = (result) => {
  let query = `SELECT 
    u.name,
    u.phone,
    u.id,
    b.owner_name AS owner_name,
    b.status AS status,
    b.address AS address,
    b.start_date AS start_date,
    b.expiry_date AS expiry_date,
    b.business_name
FROM users u
INNER JOIN businesses b 
    ON u.business_id = b.id
ORDER BY u.id DESC;
`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

User.getById = (id, result) => {
  let query = `SELECT 
    u.name,
    u.phone,
    u.id,
    u.role_id,
    b.owner_name AS owner_name,
    b.status AS status,
    b.address AS address,
    b.start_date AS start_date,
    b.expiry_date AS expiry_date,
    b.business_name
FROM users u
INNER JOIN businesses b 
    ON u.business_id = b.id WHERE u.id = ${id}
ORDER BY u.id DESC;
`;
  sql.query(query , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, { data: res, message: "success",status:true });
    }
  });
};

module.exports = User;
