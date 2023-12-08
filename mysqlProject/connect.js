// import the mysql2 module
const mysql = require("mysql2");

// initialize the connection object
const mysqlConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
});

// Check the status fo the connection
mysqlConnect.connect((err) => {
  if (err) throw err;
  console.log("Connected!!");
});

//Close the connection
mysqlConnect.end((err) => {
  if (err) {
    return console.log("error:" + err.message);
  }
  console.log("Closing the database connection...");
});
