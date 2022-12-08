import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
});
