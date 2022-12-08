import { connect } from "../../utils/db.config.js";

export async function select() {
  try {
    const connection = await connect();
    const sql = "SELECT * FROM customers";
    connection.query(sql, function (error, result) {
      // code to be executed...
    });
  } catch (error) {
    console.log(error);
  }
}

// if (error) throw error;
//       console.log(result);
