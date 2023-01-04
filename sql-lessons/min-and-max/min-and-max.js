import { query } from "../../utils/db.config.js";

/**
 * MIN() Syntax
 *
 * SELECT MIN(column_name)
 * FROM table_name
 * WHERE condition;
 */

export async function minId() {
  const [result] = await query("SELECT MIN(id) AS minId FROM customers");
  return result.minId;
}

/**
 * MAX() Syntax
 *
 * SELECT MAX(column_name)
 * FROM table_name
 * WHERE condition;
 */

export async function maxId() {
  const [result] = await query("SELECT MAX(id) AS maxId FROM customers");
  return result.maxId;
}

export async function getCustomerWithMaxId() {
  const id = await maxId();
  const [customer] = await query("SELECT * FROM customers WHERE id = " + id);
  return customer;
}

export async function getCustomerWithMinId() {
  const [customer] = await query(
    "SELECT * FROM customers WHERE id = (SELECT MIN(id) FROM customers)"
  );
  return customer;
}
