import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function connect() {
  return new Promise(function (resolve, reject) {
    connection.connect(function (error) {
      if (error) reject(error);
      resolve(connection);
    });
  });
}

// To be revised
export function disconnect() {
  connection.end(function (error) {
    if (error) throw error;
  });
}
