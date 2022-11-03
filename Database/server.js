
const express = require('express');
const routes = require('./Routes/questions.js')
const connectionClient = require('./connect.js')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// const db = require('./queries')

connectionClient.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log(`connected to database`)
})

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/', routes) //before any request you routes

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
