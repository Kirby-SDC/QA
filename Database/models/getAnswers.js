const connectionClient = require('../utils/connect.js')

const getAnswers = (req, res, next) => {

  let question_id = req.params.question_id || req.body.question_id
  let count = req.query.count || 5
  let page = req.query.page || 1
  let offSet = ((page * count) - count)
  const statement =

  {

    text:

    `SELECT json_build_object
      (   'question', $1::integer,
          'page',  $3::integer,
          'count', $2::integer,
          'results',
            (SELECT json_agg
              (json_build_object
                (
                  'answer_id', answer_id,
                  'body', body,
                  'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
                  'answerer_name', answerer_name,
                  'helpfulness', helpful,
                  'photos',
                  (select coalesce(json_agg
                    (json_build_object
                      ('id', id,
                      'url', url
                      )
                    ), '[]'::json) from photos where answer_id = question_id_questions
                  )
                )
              ) from Answers where question_id_questions = $1::integer limit $2::integer offset($4::integer)
            )
    )`,
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