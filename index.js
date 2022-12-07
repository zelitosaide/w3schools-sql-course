import { createDatabase } from "./nodejs-mysql/create-database.js";
import {
  alterCustomerTable,
  createCustomerTable,
  createUserTable,
} from "./nodejs-mysql/create-table.js";
import {
  clearEntireTable,
  deleteManyRows,
  deleteRows,
} from "./nodejs-mysql/delete.js";
import { describeTable } from "./nodejs-mysql/describe-table.js";
import { dropTable, dropTableIfExists } from "./nodejs-mysql/drop-table.js";
import {
  insertInto,
  insertIntoGetId,
  insertIntoMany,
} from "./nodejs-mysql/insert-into.js";
import { join, leftJoin } from "./nodejs-mysql/join.js";
import {
  limit,
  limitOffset,
  limitOffsetShorterSyntax,
} from "./nodejs-mysql/limit.js";
import { orderBy, orderByDesc } from "./nodejs-mysql/order-by.js";
import {
  fieldsObject,
  selectFrom,
  selectFromSomeColumns,
} from "./nodejs-mysql/select-from.js";
import { showDatabases } from "./nodejs-mysql/show-databases.js";
import { showTables } from "./nodejs-mysql/show-tables.js";
import { update, updateManyColumns } from "./nodejs-mysql/update.js";
import {
  escapingQueryValues,
  multiplePlaceholders,
  placeholder,
  where,
  wildcardCharacters,
} from "./nodejs-mysql/where.js";

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
// where();
// wildcardCharacters();
// escapingQueryValues("Mountain 21");
// placeholder("Mountain 21");
// multiplePlaceholders("Mountain 21", "Amy");
// orderBy();
// orderByDesc();
// deleteRows();
// deleteManyRows();
// clearEntireTable();
// showTables();
// dropTable();
// dropTableIfExists();
// describeTable();
// update();
// updateManyColumns();
// limit();
// limitOffset();
// limitOffsetShorterSyntax();
// join();
leftJoin();
