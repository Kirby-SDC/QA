const connectionClient = require('../utils/connect.js')
const reportQuestion = (req, res, next) => {

  let questionId = req.params.question_id;

  const statement = {
    text:
    `UPDATE Question
    SET reported = true
    WHERE
    id = ${questionId}`
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

module.exports = {reportQuestion}