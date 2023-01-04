import { query } from "../../utils/db.config.js";

/**
 * The COUNT() function returns the number of rows that matches a specified criterion.
 *
 * COUNT() Syntax
 *
 * SELECT COUNT(column_name)
 * FROM table_name
 * WHERE condition;
 */
export async function countIds() {
  return await query("SELECT COUNT(id) FROM customers");
}
