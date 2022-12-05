import { connection } from "../utils/db.js";

export function showDatabases() {
  connection.connect(function (error) {
    if (error) {
      throw error;
    }
    connection.query("show databases;", function (error, result) {
      if (error) {
        throw error;
      }
      result.forEach(function (database) {
        console.log(database.Database);
      });
    });
  });
}
