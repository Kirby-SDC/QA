const connectionClient = require('../utils/connect.js')
const getAnswers = (req, res, next) => {
  console.log(req.params, req.body)
  let question_id = req.params.question_id || req.body.question_id
  let count = req.query.count || 5
  let page = req.query.page || 1

  console.log(question_id, count, page)

  const statement = {
    text: `SELECT * FROM Answers WHERE question_id_Questions = ${question_id} order by answer_id limit ${count} offset ${(page * count) - count}`
  }

  connectionClient
  .query(statement)
  .then((data) => {
    res.send(data.rows)
  })
  .catch((err)=>{
    console.log('error')
    res.status(500).end()
  })

}

module.exports = {getAnswers}