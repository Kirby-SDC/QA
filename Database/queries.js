const Client = require('pg').Client;
const client = new Client({
  user: 'andrewarsenault',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});


client.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
    console.log(`connected to '${client.database}' on port ${client.port}`)
})

//queries go here

//export queries