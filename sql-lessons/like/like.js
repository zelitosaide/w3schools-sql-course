import { query } from "../../utils/db.config.js";

/**
 * SELECT column1, column2, ...
 * FROM table_name
 * WHERE columnN LIKE pattern;
 */
export async function customerNameThatStartsWith(char) {
  const [customer] = await query(
    `SELECT * FROM customers WHERE name LIKE "${char}%"`
  );
  return customer;
}
