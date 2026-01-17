const jwt = require("jsonwebtoken");
VerifySuperAdmin = (req, res, next) => {
  // console.log("req", req.user.data.role_id);
  if (req.user && req.user.data.role_id == 1) {
    next();
  } else {
    return res.status(403).send({
      status: false,
      statusCode:403,
      message: "You do not have permission to access.",
    });
  }
};
module.exports = VerifySuperAdmin;
