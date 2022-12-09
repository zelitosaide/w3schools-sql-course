import { connect } from "../../utils/db.config.js";

export async function home() {
  try {
    const connection = await connect();
    const sql = "SELECT name FROM customers";

    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);

      connection.end(function (error) {
        if (error) throw error;
        console.log("Connection Ended!");
      });
    });
  } catch (error) {
    console.log(error);
  }
}
