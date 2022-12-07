import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function update() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `UPDATE customers SET address = "Canyon 123" WHERE address = "Valley 345"`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}
