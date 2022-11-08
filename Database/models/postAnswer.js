const connectionClient = require('../utils/connect.js')

const postAnswer = (req, res, next) => {

  let question_id_Questions = req.params.question_id;
  let body = req.body.body;
  let date = new Date().getTime()
  let name = req.body.name;
  let email = req.body.email;
  let reported = false;
  let helpfulness = 0;

  const statement = {
    text:
    `INSERT INTO Answers
     VALUES (
      DEFAULT,
      $1::integer,
      $2::varchar,
      $3::bigint,
      $4::varchar,
      $5::varchar,
      $6::boolean,
      $7::integer) RETURNING answer_id`,

      values: [question_id_Questions, body, date, name, email, reported, helpfulness]
  }

  connectionClient
  .query(statement)
  .then((data) => {

    let answerId = data.rows[0].answer_id

    req.body.photos.forEach((url) => {
      connectionClient
      .query(`INSERT INTO Photos
           VALUES (
           DEFAULT,
           ${answerId},
           '${url}')`)
    })
    res.status(201).end()
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).end()
  })

}

module.exports = {postAnswer}