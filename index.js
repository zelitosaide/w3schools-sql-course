import { home } from "./sql-lessons/home/home.js";
import { intro } from "./sql-lessons/intro/intro.js";
import { syntax } from "./sql-lessons/syntax/syntax.js";
import {
  selectAllFields,
  selectSomeFields,
  selectSomeFieldsHardCoded,
} from "./sql-lessons/select/select.js";
import {
  selectDistinct,
  selectDistinctManyColumns,
  selectAllAndCount,
  selectAllCountAndRenameColumn,
  selectDistinctAndCount,
  selectDistinctRenameAndCount,
  countDistinctNotWorkInFirefox,
} from "./sql-lessons/select-distinct/select-distinct.js";
import {
  getCustomerById,
  where,
  selectHalfOfRecords,
  getTotalRecords,
  getCustomerByName,
} from "./sql-lessons/where/where.js";

// selectSomeFields({ table: "users", fields: ["name", "id"] });
// selectSomeFieldsHardCoded();
// selectDistinct();
// selectDistinctManyColumns();
// selectAllAndCount();
// selectAllCountAndRenameColumn();
// selectDistinctAndCount();
// selectDistinctRenameAndCount();
// countDistinctNotWorkInFirefox();
// where();
// getCustomerById(2);
// console.log(await getTotalRecords());

// const customers = await selectHalfOfRecords();
// customers.forEach(function (item) {
//   console.log(item.name);
// });

// const customer = await getCustomerByName("Zelito");
// console.log(customer.address);

const customer = await getCustomerById(2);
console.log(customer);
