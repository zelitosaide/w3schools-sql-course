import { query } from "../../utils/db.config.js";

export async function isNull(field) {
  return await query(`SELECT * FROM customers WHERE ${field} IS NULL`);
}

export async function isNotNull(field) {
  return await query(`SELECT * FROM customers WHERE ${field} IS NOT NULL`);
}
