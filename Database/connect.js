const Client = require('pg').Client

let config = {
  user:'andrewarsenault',
  host:'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432
}

let connectionClient = new Client(config);

module.exports = connectionClient;