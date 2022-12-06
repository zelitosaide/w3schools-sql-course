import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function selectFrom() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT * FROM customers LIMIT 4`;
    connection.query(sql, function (error, result, fields) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function selectFromSomeColumns() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT name, address FROM customers LIMIT 3`;
    connection.query(sql, function (error, result, fields) {
      if (error) throw error;
      console.log(result);
    });
  });
}
