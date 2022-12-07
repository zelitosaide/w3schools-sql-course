import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function limit() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT * FROM customers LIMIT 2`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function limitOffset() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT * FROM customers LIMIT 2 OFFSET 1`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function limitOffsetShorterSyntax() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT * FROM customers LIMIT 1, 2`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
