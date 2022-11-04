const connectionClient = require('../utils/connect.js')

const putAhelpful = (req, res, next) => {

  let answerId = req.params.answer_id;

  const statement = {
    text:
    `UPDATE Answers
    SET helpful = helpful + 1
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

module.exports = {putAhelpful}
