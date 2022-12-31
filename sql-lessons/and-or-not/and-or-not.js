import { query } from "../../utils/db.config.js";

/**
 * AND Syntax
 *
 * SELECT column1, column2, ...
 * FROM table_name
 * WHERE condition1 AND condition2 AND condition3 ...;
 */

export async function andOperator(name, address) {
  return await query(
    `SELECT * FROM customers WHERE name = "${name}" AND address = "${address}"`
  );
}
