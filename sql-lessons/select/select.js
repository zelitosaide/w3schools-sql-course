import { connect } from "../../utils/db.config.js";

export async function selectAllFields(table) {
  try {
    const { connection } = await connect();
    const sql = `SELECT * FROM ?? LIMIT 2`;
    connection.query(sql, [table], function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function selectSomeFields(props) {
  try {
    const { fields, table } = props;
    const { connection } = await connect();
    const sql = "SELECT ?? FROM ??";
    connection.query(sql, [fields, table], function (error, result) {
      if (error) throw error;
      console.log(result);
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
}

export async function selectSomeFieldsHardCoded() {
  try {
    const { connection } = await connect();
    const sql = "SELECT name, id FROM users";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
}
