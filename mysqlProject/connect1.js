// import the mysql2 module
const mysql = require("mysql2");

// initialize the connection object
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
});

// Check the status fo the connection
conn.connect((err) => {
  if (err) throw err;
  console.log("Connected!!");
});
let database = "StudTrack";
// 1) Query for Creating Database
let sql = "CREATE DATABASE IF NOT EXISTS " + database;

conn.query(sql, (err) => {
  if (err) throw err.message;
  console.log("Database Created");
});

// 2) Query for Creating Student Table
sql = `CREATE TABLE IF NOT EXISTS ${database}.Student (S_code VARCHAR(5) PRIMARY KEY,S_name VARCHAR(255),S_year VARCHAR(255));`;

conn.query(sql, (err) => {
  if (err) throw err;
  console.log("Student Table Created");
});

// 3) Query for Creating Course Table
sql = `CREATE TABLE IF NOT EXISTS ${database}.Course (C_code VARCHAR(5) PRIMARY KEY,C_name VARCHAR(255),C_book VARCHAR(255),S_year VARCHAR(255));`;

conn.query(sql, (err) => {
  if (err) throw err;
  console.log("Course Table Created");
});
// 3) Query for Creating Course Table
sql = `CREATE TABLE IF NOT EXISTS ${database}.CtudentCourse (S_code VARCHAR(5),C_code VARCHAR(5), grade VARCHAR(1), PRIMARY KEY (S_code, C_code), FOREIGN KEY (S_code) REFERENCES student(S_code),FOREIGN KEY (C_code) REFERENCES course(C_code));`;

conn.query(sql, (err) => {
  if (err) throw err;
  console.log("Student Course Table Created");
});

//Close the connection
conn.end((err) => {
  if (err) {
    return console.log("error:" + err.message);
  }
  console.log("Closing the database connection...");
});
