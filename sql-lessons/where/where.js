import { connect, query } from "../../utils/db.config.js";

export async function where() {
  try {
    const { connection } = await connect();
    const sql = "SELECT * FROM customers WHERE address='Namicopo'";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCustomerById(id) {
  const { connection } = await connect();
  const sql = "SELECT * FROM customers WHERE id=?";
  connection.query(sql, id, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
}

// export async function selectHalfOfRecords() {
//   const { connection } = await connect();
//   const [total] = await query("SELECT COUNT(*) FROM customers", connection);
//   const records = await query(
//     "SELECT COUNT(*) FROM customers WHERE id > " + total["COUNT(*)"] / 2,
//     connection
//   );
//   console.log(records, total["COUNT(*)"]);
// }

export async function getTotalRecords() {
  const [result] = await query("SELECT COUNT(*) AS total FROM customers");
  return result.total;
}
