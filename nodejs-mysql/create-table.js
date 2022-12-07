import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function createCustomerTable() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255));`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function createUserTable() {
  connection.connect(function (error) {
    if (error) throw error;
    // const sql = `CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));`;
    const sql = `CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function alterCustomerTable() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
