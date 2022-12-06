import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function showTables() {
  connection.connect(function (error) {
    if (error) throw error;
    connection.query("show tables", function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
