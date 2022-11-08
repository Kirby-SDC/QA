
const connectionClient = require('../utils/connect.js')
const {getQuestionsText} = require('./statements')

const getQuestions = (req, res, next) => {

  let product_id = req.query.product_id
  let count = req.query.count || 5
  let page = req.query.page || 1
  let offSet = ((page * count) - count)

  const statement = {
    text: getQuestionsText,
    values: [product_id, count, offSet]
  }

  connectionClient
  .query(statement)
  .then((data) => {
    // console.log(data.rows[0].json_build_object)
    res.send(data.rows[0].json_build_object)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).end()
  })

}

module.exports = {getQuestions}