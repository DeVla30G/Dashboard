const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  database: "micros",
  user: "VlaSamFani",
  password: "1234",
  port: "3306",
  multipleStatements: true
});

module.exports = con;
