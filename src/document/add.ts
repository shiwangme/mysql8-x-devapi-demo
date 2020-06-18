// import mysqlx from '@mysql/xdevapi';
import mysqlx from 'mysqlx';

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

  const db = session.getSchema('world_x');

  const collection = db.getCollection('demo');
  const result = await collection
    .add({ test: 'demo02' })
    .add({ test: 'demo03' })
    .execute();

  console.log(result);
  // OperationResult {
  //   xResult: {
  //     getWarnings: [Function: getWarnings],
  //     getWarningsCount: [Function: getWarningsCount],
  //     getAffectedItemsCount: [Function: getAffectedItemsCount],
  //     getAffectedRowsCount: [Function: deprecated],
  //     getAutoIncrementValue: [Function: getAutoIncrementValue],
  //     getGeneratedIds: [Function: getGeneratedIds]
  //   }
  // }
}

main();
