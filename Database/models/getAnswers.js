const connectionClient = require('../utils/connect.js')
const {getAnswersText} = require('./statements')

const getAnswers = (req, res, next) => {

  let question_id = req.params.question_id || req.body.question_id
  let count = req.query.count || 5
  let page = req.query.page || 1
  let offSet = ((page * count) - count)

  const statement = {
    text: getAnswersText,
    values: [question_id, count, page, offSet]
  }

  connectionClient
  .query(statement)
  .then((data) => {
    res.send(data.rows[0].json_build_object)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).end()
  })

}

module.exports = {getAnswers}