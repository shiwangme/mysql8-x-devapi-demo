const mysqlx = require('@mysql/xdevapi');

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

module.exports = client;
