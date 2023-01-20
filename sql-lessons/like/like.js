import { query } from "../../utils/db.config.js";

/**
 * SELECT column1, column2, ...
 * FROM table_name
 * WHERE columnN LIKE pattern;
 */
export async function customerNameThatStartsWith(text) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "${text}%"`
  );
  return customers;
}

export async function customerNameThatEndsWith(text) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "%${text}"`
  );
  return customers;
}

export async function customerNameThatHaveAStringInAnyPosition(text) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "%${text}%"`
  );
  return customers;
}

export async function customerNameThatHaveAStringInTheSecondPosition(text) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "_${text}%"`
  );
  return customers;
}
