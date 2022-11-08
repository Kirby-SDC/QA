const connectionClient = require('../utils/connect.js')
const {postQuestionText} = require('./statements')

const postQuestion = (req, res, next) => {

  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  let product_id = req.body.product_id;
  let date = new Date().getTime()
  let reported = false;
  let helpfulness = 0;

  const statement = {
    text: postQuestionText,
    values: [product_id, body, date, name, email, reported, helpfulness]
  }

  connectionClient
  .query(statement)
  .then((data) => {
    res.status(201).end()
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).end()
  })

}

module.exports = {postQuestion}