import { query } from "../../utils/db.config.js";

export async function minId() {
  const [result] = await query("SELECT MIN(id) AS minId FROM customers");
  return result.minId;
}
