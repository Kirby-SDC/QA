
const express = require('express');
const routes = require('../routes/questions.js')
const connectionClient = require('../utils/connect.js')
const app = express();
const port = 3000;

connectionClient.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log(`connected to database`)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', routes) //before any request you route

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
