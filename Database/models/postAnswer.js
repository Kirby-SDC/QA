const connectionClient = require('../utils/connect.js')
const {postAnswersText} = require('./statements')
const {postAnswerSubText} = require('./statements')

const postAnswer = (req, res, next) => {

  let question_id_Questions = req.params.question_id;
  let body = req.body.body;
  let date = new Date().getTime()
  let name = req.body.name;
  let email = req.body.email;
  let reported = false;
  let helpfulness = 0;

  const statement = {
    text: postAnswersText,
    values: [question_id_Questions, body, date, name, email, reported, helpfulness]
  }

  connectionClient
  .query(statement)
  .then((data) => {

    let answerId = data.rows[0].answer_id

    req.body.photos.forEach((url) => {

      const subStatement = {
        text: postAnswerSubText,
        values: [answerId, url]
      }

      connectionClient
      .query(subStatement)
    })
    res.status(201).end()
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).end()
  })

}

module.exports = {postAnswer}