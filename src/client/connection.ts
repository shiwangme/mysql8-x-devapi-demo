import mysqlx from 'mysqlx';

async function main(): Promise<void> {
  const dictSession = await mysqlx.getSession({
    host: 'localhost',
    port: 33060,
    user: 'root',
    password: 'root'
  });
  console.log(dictSession);
  // user:password@[(address=[host]:[port]), (address=[host]:[port]) ..]
  const uriSession = await mysqlx.getSession('root:root@localhost:33060');
  console.log(uriSession);
}

main();
