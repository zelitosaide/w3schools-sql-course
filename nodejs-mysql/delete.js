import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function deleteRows() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `DELETE FROM customers WHERE address = "Mountain 21"`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
}

export function deleteManyRows() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `DELETE FROM customers WHERE id > 16`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
}

export function clearEntireTable() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = "DELETE FROM customers";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
}
