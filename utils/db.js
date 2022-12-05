import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  // host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  // port: process.env.PORT,
});
