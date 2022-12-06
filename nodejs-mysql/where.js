import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function where() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT * FROM customers WHERE address="Park Lane 38"`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
