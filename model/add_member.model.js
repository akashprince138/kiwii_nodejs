const sql = require("../config/db.js");
const bcrypt = require("bcrypt");

const AddMember = function (addMember) {
  this.business_id = addMember.business_id;
  this.name = addMember.name;
  this.phone = addMember.phone;
  this.password = addMember.password;
  this.role_id = addMember.role_id;
  this.status = addMember.status;
  this.profile_pic = addMember.profile_pic;
  this.parent_id = addMember.parent_id;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

AddMember.create = async (newAddMember, result) => {
  try {
    // 🔐 Encrypt password
    newAddMember.password = await bcrypt.hash(newAddMember.password, 10);

    // 🔍 Get allowed users + current user count
    const query = `
      SELECT 
        b.allow_users,
        COUNT(u.id) AS user_count
      FROM businesses b
      LEFT JOIN users u ON u.business_id = b.id
      WHERE b.id = ?
      GROUP BY b.id
    `;

    sql.query(query, [newAddMember.business_id], (err, res) => {
      if (err) {
        console.log(err);
        return result(err, null);
      }
      // console.log('newAddMember.business_id', newAddMember.business_id)
      // console.log('res', res)
      if (!res.length) {
        return result(null, {
          status: false,
          message: "Business not found",
        });
      }

      const { allow_users, user_count } = res[0];
      // console.log('allow_users', allow_users)
      // console.log('user_count', user_count)

      if (user_count >= allow_users) {
        return result(null, {
          status: false,
          message: `You can add only ${allow_users} users`,
        });
      }

      // 📞 Check phone exists
      sql.query(
        "SELECT id FROM users WHERE phone = ?",
        [newAddMember.phone],
        (err, res) => {
          if (err) {
            console.log(err);
            return result(null, {
              status: false,
              message: "Database error",
            });
          }

          if (res.length > 0) {
            return result(null, {
              status: false,
              message: "Phone number already exists",
            });
          }

          // ✅ Insert user
          sql.query(
            "INSERT INTO users SET ?",
            newAddMember,
            (err, res) => {
              if (err) {
                console.log(err);
                return result(err, null);
              }

              result(null, {
                status: true,
                message: "User added successfully",
                data: res,
              });
            }
          );
        }
      );
    });
  } catch (error) {
    console.log(error);
    result(error, null);
  }
};

module.exports = AddMember;
