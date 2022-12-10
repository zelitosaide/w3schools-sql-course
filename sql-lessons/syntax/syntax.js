import { connect } from "../../utils/db.config.js";

export async function syntax() {
  try {
    const connection = await connect();
    const sql = "SELECT * FROM customers";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}
