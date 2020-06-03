import knex from 'knex';
// import path from 'path';

const connection = knex({
  // client: 'sqlite',
  // connection:{
  //   filename: path.resolve(__dirname, 'database.sqlite'),
  // },
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    database: 'ecoleta'
  }
});

export default connection;