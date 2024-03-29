import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function connect() {
  return new Promise(function (resolve, reject) {
    connection.connect(function (error) {
      if (error) reject(error);
      resolve({ connection, mysql });
    });
  });
}

export function query(sql) {
  return new Promise(function (resolve, reject) {
    connection.query(sql, function (error, result) {
      if (error) reject(error);
      resolve(result);
    });
  });
}
