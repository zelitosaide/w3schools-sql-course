import { query } from "../../utils/db.config.js";

export async function isNull(field) {
  return await query(`SELECT * FROM customers WHERE ${field} IS NULL`);
}
