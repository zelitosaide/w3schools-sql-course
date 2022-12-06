import { createDatabase } from "./lessons/create-database.js";
import {
  alterCustomerTable,
  createCustomerTable,
  createUserTable,
} from "./lessons/create-table.js";
import { insertInto, insertIntoMany } from "./lessons/insert-into.js";
import { showDatabases } from "./lessons/show-databases.js";

// showDatabases();
// createDatabase();
// createCustomerTable();
// createUserTable();
// alterCustomerTable();
// insertInto();
insertIntoMany();
