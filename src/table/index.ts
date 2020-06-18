import mysqlx from '@mysql/xdevapi';
// import mysqlx from 'mysqlx';

const client = mysqlx.getClient(
  {
    host: 'localhost',
    port: 33060,
    user: 'root',
    password: 'root'
  },
  {
    pooling: {
      enabled: true,
      // maxIdleTime: 30000,
      maxSize: 25
      // queueTimeout: 10000
    }
  }
);

async function main(): Promise<void> {
  const session = await client.getSession();
  const result = await session.sql('show databases').execute();

  console.log(result.rows);

  const table = session.getSchema('world_x').getTable('city');
  const selected = await table
    .select('ID', 'Name')
    .limit(10)
    .offset(0)
    .execute();
  console.log(selected.fetchAll());
}

main();
