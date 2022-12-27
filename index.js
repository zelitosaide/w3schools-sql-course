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
} from "./sql-lessons/select-distinct/select-distinct.js";

// selectSomeFields({ table: "users", fields: ["name", "id"] });
// selectSomeFieldsHardCoded();
// selectDistinct();
// selectDistinctManyColumns();
// selectAllAndCount();
// selectAllCountAndRenameColumn();
// selectDistinctAndCount();
selectDistinctRenameAndCount();
