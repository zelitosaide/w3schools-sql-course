import { connect } from "../../utils/db.config.js";

export async function selectDistinct() {
  // SELECT DISTINCT column1, column2, ... FROM table_name;
  try {
    const { connection } = await connect();
    const sql = "SELECT DISTINCT address FROM customers;";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function selectDistinctManyColumns() {
  try {
    const { connection } = await connect();
    const sql = "SELECT DISTINCT name, address FROM customers;";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function selectAllAndCount() {
  try {
    const { connection } = await connect();
    const sql = "SELECT COUNT(address) FROM customers;";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function selectAllCountAndRenameColumn() {
  try {
    const { connection } = await connect();
    const sql = "SELECT COUNT(address) AS total FROM customers;";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function selectDistinctAndCount() {
  try {
    const { connection } = await connect();
    const sql = "SELECT COUNT(DISTINCT address) FROM customers;";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function selectDistinctRenameAndCount() {
  try {
    const { connection } = await connect();
    const sql = "SELECT COUNT(DISTINCT address) AS total FROM customers;";
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}
