const connectionClient = require('../utils/connect.js')
const {putQhelpfulText} = require('./statements')

const putQhelpful = (req, res, next) => {

  let questionId = req.params.question_id;

  const statement = {
    text: putQhelpfulText,
    values: [questionId]
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

module.exports = {putQhelpful}