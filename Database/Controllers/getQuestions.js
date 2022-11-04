
const connectionClient = require('../utils/connect.js')
const getQuestions = (req, res, next) => {

  let product_id = req.query.product_id
  let count = req.query.count || 5
  let page = req.query.page || 1

  console.log(product_id, count, page)

  const statement = {
    text: `SELECT * FROM Question WHERE product_id = ${product_id} order by id limit ${count} offset ${(page * count) - count}`
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

module.exports = {getQuestions}