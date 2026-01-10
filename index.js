const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const upload = require("express-fileupload");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: true,
    credentials: true,
       methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));

app.use(upload());

app.get("/", function (req, res) {
  return res.send({ message: "App is running" });
});

require("./routes/routes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server running on port:", PORT);
});

