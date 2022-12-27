import { connect } from "../../utils/db.config.js";

export async function where() {
  const { connection } = await connect();
  const sql = 'SELECT * FROM customers WHERE address="Namicopo"';
  connection.query(sql, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
}
