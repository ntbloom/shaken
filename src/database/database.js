import initSqlJs from 'sql.js';

async function querySql() {
  const SQL = await initSqlJs({
    locateFile: (file) => "../../node_modules/sql.js/dist/sql-wasm.wasm"
  });
  const db = new SQL('/drinkbase.db');
  // Execute a single SQL string that contains multiple statements
  db.run(
    "CREATE TABLE hello (a int, b char); INSERT INTO hello VALUES (0, 'hello'); INSERT INTO hello VALUES (1, 'world');",
  );

  // Prepare an sql statement
  const stmt = db.prepare('SELECT * FROM hello WHERE a=:aval AND b=:bval');

  // Bind values to the parameters and fetch the results of the query
  const result = stmt.getAsObject({ ':aval': 1, ':bval': 'world' });
  console.log(result); // Will print {a:1, b:'world'}
}

export default querySql;
