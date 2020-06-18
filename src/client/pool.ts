import mysqlx, { Schema } from 'mysqlx';

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
  const schemaList = session.getSchemas();

  console.log('Available schemas in this session:');

  // Loop over all available schemas and print their name
  schemaList.forEach((x: Schema) => console.log(x.getName()));
}

main();
