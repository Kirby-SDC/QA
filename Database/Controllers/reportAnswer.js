const connectionClient = require('../utils/connect.js')
const reportAnswer = (req, res, next) => {

  let answerId = req.params.answer_id;

  const statement = {
    text:
    `UPDATE Answers
    SET reported = true
    WHERE
    answer_id = ${answerId}`
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

module.exports = {reportAnswer}