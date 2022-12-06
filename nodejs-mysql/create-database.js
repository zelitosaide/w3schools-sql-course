import { connection } from "../utils/db.js";

export function createDatabase() {
  connection.connect(function (error) {
    if (error) throw error;
    connection.query("CREATE DATABASE bookkeeping;", function (error, result) {
      console.log(result);
    });
  });
}
