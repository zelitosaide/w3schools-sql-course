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

// Finds any values that start with "a" and are at least 2 characters in length
export async function customerNameThatStartWithACharAndAreAtLeast2CharactersInLength(
  char
) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "${char}_%"`
  );
  return customers;
}

// Finds any values that start with "a" and are at least 3 characters in length
export async function customerNameThatStartWithACharAndAreAtLeast3CharactersInLength(
  char
) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "${char}__%"`
  );
  return customers;
}

// Finds any values that start with "a" and ends with "o"
export async function customerNameThatStartWithAStringAndEndsWithAString(
  text1,
  text2
) {
  const customers = await query(
    `SELECT * FROM customers WHERE name LIKE "${text1}%${text2}"`
  );
  return customers;
}

// customers with a name that does NOT start with "a":
export async function customerNameThatDoesNotStartWithAString(text) {
  const customers = await query(
    `SELECT * FROM customers WHERE name NOT LIKE "${text}%"`
  );
  return customers;
}
