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
  getTotalRecords,
  getCustomerByName,
  getSecondHalfOfRecords,
  getFistHalfOfRecords,
  getCustomersIdGreaterThanOrEqual,
  getCustomersIdLessThanOrEqual,
  getCustomersIdNotEqual,
  getCustomersIdBetween,
  getCustomersAddressLike,
  getCustomersNameIn,
} from "./sql-lessons/where/where.js";
import {
  andOperator,
  combiningAndNot,
  combiningAndOr,
  notOperator,
  orOperator,
} from "./sql-lessons/and-or-not/and-or-not.js";
import {
  orderBy,
  orderByAsc,
  orderByDesc,
  orderBySeveralColumns,
  orderBySeveralColumns2,
} from "./sql-lessons/order-by/order-by.js";
import {
  insertDataOnlyInSpecifiedColumns,
  postCustomer,
} from "./sql-lessons/insert-into/insert-into.js";
import { isNull } from "./sql-lessons/null-values/null-values.js";

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

// const customers = await getSecondHalfOfRecords();
// customers.forEach(function (item) {
//   console.log(item.name);
// });

// const customer = await getCustomerByName("Zelito");
// console.log(customer.address);

// const customer = await getCustomerById(2);
// console.log(customer);

// const firstHalfOfCustomers = await getFistHalfOfRecords();
// const secondHalfOfCustomers = await getSecondHalfOfRecords();
// console.log(firstHalfOfCustomers);
// console.log(secondHalfOfCustomers);

// console.log(await getCustomersIdGreaterThanOrEqual(4));
// console.log(await getCustomersIdLessThanOrEqual(5));
// console.log(await getCustomersIdNotEqual(1));
// console.log(await getCustomersIdBetween(2, 4));
// console.log(await getCustomersAddressLike("s%"));
// console.log(await getCustomersNameIn("zelito", "abdala"));

// console.log(await andOperator("abdala", "namicopo"));
// console.log(await orOperator("abdala", "namicopo"));
// console.log(await notOperator(1));
// console.log(await combiningAndOr("abdala", "namiicopo", 2));
// console.log(await combiningAndNot("zelito", "namicopo"));

// console.log(await orderBy("address"));
// console.log(await orderByDesc("name"));
// console.log(await orderByAsc("id"));
// console.log(await orderBySeveralColumns());
// console.log(await orderBySeveralColumns2());

// const customer = await postCustomer("Leonardo", "Carrupeia");
// console.log(customer.affectedRows);

// const customer = await postCustomer("Irene", "Carrupeia");
// console.log(customer.affectedRows);

// const customer = await insertDataOnlyInSpecifiedColumns("Resta");
// console.log(customer.affectedRows);

// const customers = await isNull("name");
const customers = await isNull("address");
console.log(customers);
