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
  const [result] = await query("SELECT COUNT(id) FROM customers");
  return result["COUNT(id)"];
}

/**
 * The AVG() function returns the average value of a numeric column.
 *
 * AVG() Syntax
 *
 * SELECT AVG(column_name)
 * FROM table_name
 * WHERE condition;
 */
export async function idsAverage() {}
