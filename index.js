import { createDatabase } from "./nodejs-mysql/create-database.js";
import {
  alterCustomerTable,
  createCustomerTable,
  createUserTable,
} from "./nodejs-mysql/create-table.js";
import {
  insertInto,
  insertIntoGetId,
  insertIntoMany,
} from "./nodejs-mysql/insert-into.js";
import {
  fieldsObject,
  selectFrom,
  selectFromSomeColumns,
} from "./nodejs-mysql/select-from.js";
import { showDatabases } from "./nodejs-mysql/show-databases.js";
import { where } from "./nodejs-mysql/where.js";

// showDatabases();
// createDatabase();
// createCustomerTable();
// createUserTable();
// alterCustomerTable();
// insertInto();
// insertIntoMany();
// insertIntoGetId();
// selectFrom();
// selectFromSomeColumns();
// fieldsObject();
where();
