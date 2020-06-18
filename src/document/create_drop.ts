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

  const collection = await db.createCollection('demo');
  console.log(collection);

  // 创建索引参考： https://dev.mysql.com/doc/x-devapi-userguide/en/collection-indexing.html

  // myCollection.createIndex("count", {fields:[{"field": "$.count", "type":"INT", required:true}]});
  // myCollection.createIndex("zip", {fields: [{field: "$.zip", type: "TEXT(10)"}]})

  // session.runSql('SHOW INDEX FROM mySchema.myCollection');
}

main();
