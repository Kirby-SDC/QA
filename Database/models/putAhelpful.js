const connectionClient = require('../utils/connect.js')
const {putAhelpfulText} = require('./statements')

const putAhelpful = (req, res, next) => {

  let answerId = req.params.answer_id;

  const statement = {
    text: putAhelpfulText,
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

module.exports = {putAhelpful}
