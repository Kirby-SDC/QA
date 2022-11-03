// const path = path.resolve(__dirname, './.env') <--
require('dotenv').config()
const Client = require('pg').Client


let config = {
  user: process.env.USERID,
  host:process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  idle_session_timeout: process.env.IDLE_SESSION_TIMEOUT
}

let connectionClient = new Client(config);

module.exports = connectionClient;