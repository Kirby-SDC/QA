const connectionClient = require('../utils/connect.js')
const {putAreportText} = require('./statements')

const reportAnswer = (req, res, next) => {

  let answerId = req.params.answer_id;

  const statement = {
    text: putAreportText,
    values: [answerId]
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