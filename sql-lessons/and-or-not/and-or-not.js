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

/**
 * OR Syntax
 *
 * SELECT column1, column2, ...
 * FROM table_name
 * WHERE condition1 OR condition2 OR condition3 ...;
 */
export async function orOperator(name, address) {
  return await query(
    `SELECT * FROM customers WHERE name = "${name}" OR address = "${address}"`
  );
}

/**
 * NOT Syntax
 *
 * SELECT column1, column2, ...
 * FROM table_name
 * WHERE NOT condition;
 */
export async function notOperator(id) {
  return await query("SELECT * FROM customers WHERE NOT id = " + id);
}

export async function combiningAndOr(name, address, id) {
  return await query(
    `SELECT * FROM customers WHERE name = "${name}" AND (address = "${address}" OR id > ${id})`
  );
}
