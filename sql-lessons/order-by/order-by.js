import { query } from "../../utils/db.config.js";

/**
 * ORDER BY Syntax
 *
 * SELECT column1, column2, ...
 * FROM table_name
 * ORDER BY column1, column2, ... ASC|DESC;
 */

export async function orderBy(term) {
  return await query("SELECT * FROM customers ORDER BY " + term);
}

export async function orderByDesc(term) {
  return await query("SELECT * FROM customers ORDER BY " + term + " DESC");
}

export async function orderByAsc(term) {
  return await query("SELECT * FROM customers ORDER BY " + term + " ASC");
}

/**
 * The following SQL statement selects all customers from the "customers" table,
 * sorted by the "address" and the "name" column. This means that it
 * orders by address, but if some rows have the same address, it orders them by name:
 */
export async function orderBySeveralColumns() {
  // return await query("SELECT * FROM customers ORDER BY address, name");
  return await query(
    "SELECT address, name FROM customers ORDER BY address, name"
  );
}

export async function orderBySeveralColumns2() {
  return await query(
    "SELECT address, name FROM customers ORDER BY address ASC, name DESC"
  );
}
