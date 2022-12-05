import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  // host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

connection.connect(function (error) {
  if (error) {
    throw error;
  }
  console.log("connected...");
});
