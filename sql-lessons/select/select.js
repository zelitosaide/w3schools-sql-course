import { connect } from "../../utils/db.config.js";

export async function selectAllFields(table) {
  try {
    const { connection } = await connect();
    const sql = `SELECT * FROM ?? LIMIT 2`;
    connection.query(sql, [table], function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}
