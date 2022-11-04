const connectionClient = require('../utils/connect.js')

const getAnswers = (req, res, next) => {

  let question_id = req.params.question_id || req.body.question_id
  let count = req.query.count || 5
  let page = req.query.page || 1

  const statement =

  {

    text:

    `SELECT json_build_object
      (   'question', ${question_id},
          'page',  ${page},
          'count', ${count},
          'results',

            (SELECT json_agg
              (json_build_object
                (
                  'answer_id', answer_id,
                  'body', body,
                  'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000), 'DD/MM/YYYY HH24:MI:SS'),
                  'answerer_name', answerer_name,
                  'helpfulness', helpful,
                  'photos',

                  (select json_agg
                    (json_build_object
                      ('id', id,
                      'url', url
                      )
                    ) from photos where answer_id = question_id_questions
                  )
                )
              ) from Answers where question_id_questions = ${question_id} limit ${count} offset(${(page - 1) * count})
            )
    )`
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