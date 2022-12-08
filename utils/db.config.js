import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
