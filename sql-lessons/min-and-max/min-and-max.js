import { query } from "../../utils/db.config.js";

export async function minId() {
  return await query("SELECT MIN(id) AS minId FROM customers");
}
