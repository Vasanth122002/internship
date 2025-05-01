const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12776298",
  password: "nVraymTUR1",
  database: "sql12776298",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = db;
