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

// export async function getCustomerById(id) {
//   const { connection } = await connect();
//   const sql = "SELECT * FROM customers WHERE id=?";
//   connection.query(sql, id, function (error, result) {
//     if (error) throw error;
//     console.log(result);
//   });
// }

// divisor de aguas
export async function getTotalRecords() {
  const result = await query("SELECT COUNT(*) AS total FROM customers");
  return result[0].total;
}

export async function getFistHalfOfRecords() {
  const total = await getTotalRecords();
  return await query("SELECT * FROM customers WHERE id < " + total / 2);
}

export async function getSecondHalfOfRecords() {
  const total = await getTotalRecords();
  return await query("SELECT * FROM customers WHERE id > " + total / 2);
}

export async function getCustomerByName(name) {
  const [customer] = await query(
    `SELECT * FROM customers WHERE name = "${name}"`
  );
  return customer;
}

export async function getCustomerById(id) {
  // const [customer] = await query(`SELECT * FROM customers WHERE id = "${id}"`);
  const [customer] = await query("SELECT * FROM customers WHERE id = " + id);
  return customer;
}
