import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function describeTable() {
  connection.connect(function (error) {
    if (error) throw error;
    connection.query("DESCRIBE customers", function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
