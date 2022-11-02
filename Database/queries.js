const Client = require('pg').Client;
const fs = require('fs')
const client = new Client({
  user: 'andrewarsenault',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});

const populate = fs.readFileSync('db.sql').toString();

client.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query(populate, function(err, result){
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    process.exit(0);
});
    console.log(`connected to '${client.database}' on port ${client.port}`)
})

//queries go here

//export queries