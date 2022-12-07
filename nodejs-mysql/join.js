import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function join() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function leftJoin() {}
