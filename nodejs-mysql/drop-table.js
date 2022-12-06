import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function dropTable() {
  connection.connect(function (error) {
    if (error) throw error;
    connection.query("DROP TABLE customers", function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function dropTableIfExists() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = "DROP TABLE IF EXISTS customers";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
