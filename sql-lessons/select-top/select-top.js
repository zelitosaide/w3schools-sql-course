import { query } from "../../utils/db.config.js";

/**
 * Note: Not all database systems support the SELECT TOP clause. MySQL supports
 * the LIMIT clause to select a limited number of records, while Oracle uses
 * FETCH FIRST n ROWS ONLY and ROWNUM.
 */

/**
 * SQL Server / MS Access Syntax:
 *
 * SELECT TOP number|percent column_name(s)
 * FROM table_name
 * WHERE condition;
 */

/**
 * MySQL Syntax:
 *
 * SELECT column_name(s)
 * FROM table_name
 * WHERE condition
 * LIMIT number;
 */

/**
 * Oracle 12 Syntax:
 *
 * SELECT column_name(s)
 * FROM table_name
 * ORDER BY column_name(s)
 * FETCH FIRST number ROWS ONLY;
 */

/**
 * Older Oracle Syntax:
 *
 * SELECT column_name(s)
 * FROM table_name
 * WHERE ROWNUM <= number;
 */

/**
 * Older Oracle Syntax (with ORDER BY):
 *
 * SELECT *
 * FROM (SELECT column_name(s) FROM table_name ORDER BY column_name(s))
 * WHERE ROWNUM <= number;
 */
