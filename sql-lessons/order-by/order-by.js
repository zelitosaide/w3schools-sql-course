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
