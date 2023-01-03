import { query } from "../../utils/db.config.js";

/**
 * UPDATE Syntax
 *
 * UPDATE table_name
 * SET column1 = value1, column2 = value2, ...
 * WHERE condition;
 */
export async function updateAddress(value, condition) {
  return await query(
    `UPDATE customers SET address = "${value}" WHERE address = "${condition}"`
  );
}
