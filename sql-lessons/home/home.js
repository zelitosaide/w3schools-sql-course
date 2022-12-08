import { connect } from "../../utils/db.config.js";

export async function select() {
  try {
    const connection = await connect();
    console.log("Connected!");
  } catch (error) {
    console.log(error.message);
  }
}
