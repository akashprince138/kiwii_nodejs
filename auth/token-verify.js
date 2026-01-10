const jwt = require("jsonwebtoken");
require("dotenv").config();
verifyToken = (req, res, next) => {
  const secretkey = process.env.secretkey;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).send({
      status: 401,
      message: "Token is empty.",
    });
  jwt.verify(token, secretkey, (err, user) => {
    console.log(err);
    if (err)
      return res.status(403).send({
        status: 403,
        message: "Token has expired.",
      });
    req.user = user;
    next();
  });
};
module.exports = verifyToken;
