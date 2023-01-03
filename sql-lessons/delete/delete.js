import { query } from "../../utils/db.config.js";

/**
 * DELETE Syntax
 *
 * DELETE FROM table_name WHERE condition;
 */
export async function deleteCustomers(id) {
  return await query("DELETE FROM customers WHERE id = " + id);
}

export async function deleteAllCustomers() {
  return await query("DELETE FROM customers");
}

/**
 * Note: Be careful when deleting records in a table! Notice the WHERE clause in
 * the DELETE statement. The WHERE clause specifies which record(s) should be
 * deleted. If you omit the WHERE clause, all records in the table will be deleted!
 */
