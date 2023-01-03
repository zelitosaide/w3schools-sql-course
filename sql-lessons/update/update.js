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

export async function updateName(value, condition) {
  return await query(
    `UPDATE customers SET name = "${value}" WHERE name ${condition}`
  );
}

/**
 * Note: Be careful when updating records in a table! Notice the WHERE clause in
 * the UPDATE statement. The WHERE clause specifies which record(s) that should
 * be updated. If you omit the WHERE clause, all records in the table will be updated!
 */
