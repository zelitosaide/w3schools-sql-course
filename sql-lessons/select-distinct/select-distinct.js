import { connect } from "../../utils/db.config.js";

export async function selectDistinct() {
  const { connection } = await connect();
  const sql = "SELECT DISTINCT address FROM customers;";
  connection.query(sql, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
}
