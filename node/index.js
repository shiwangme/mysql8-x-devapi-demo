const client = require('./client/pool');

async function main() {
  const session = await client.getSession();

  const db = session.getSchema('world_x');
  console.log(db);
}

main();
