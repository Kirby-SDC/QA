
const connectionClient = require('../utils/connect.js')

const getQuestions = (req, res, next) => {

  let product_id = req.query.product_id
  let count = req.query.count || 5
  let page = req.query.page || 1

  const statement = {
    text: `SELECT json_build_object
    (
        'product_id', ${product_id},
        'results',
      (SELECT json_agg
        (json_build_object
          (
          'question_id', id,
          'question_body', question_body,
          'question_date', TO_CHAR(TO_TIMESTAMP(question_date / 1000), 'DD/MM/YYYY HH24:MI:SS'),
          'asker_name', asker_name,
          'question_helpfulness', question_helpfulness,
          'reported', reported,
          'answers',
            (SELECT json_object_agg
              (
              answer_id,
                (SELECT json_build_object
                  (
                    'id', answer_id,
                    'body', body,
                    'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
                    'answerer_name', answerer_name,
                    'helpfulness', helpful,
                    'photos',
                      (SELECT COALESCE (json_agg(url),'[]'::json) from Photos where photos.answer_id = answers.answer_id)
                  )
                )
              ) from Answers where Answers.question_id_questions = question.id)
          )
        ) from Question where product_id = ${product_id} AND reported = false limit ${count} offset(${(page * count) - count})
      )
    )`
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

// SELECT json_build_object
//       (
//         'product_id', 5,
//         'results',
//         (SELECT jsonb_agg
//           (json_build_object
//               (
//                 'question_id', id,
//                 'question_body', question_body,
//                 'question_date', TO_CHAR(TO_TIMESTAMP(question_date / 1000), 'DD/MM/YYYY HH24:MI:SS'),
//                 'asker_name', asker_name,
//                 'question_helpfulness', question_helpfulness,
//                 'reported', reported,
//                 'answers',
//                   (SELECT jsonb_object_agg
//                     (id,
//                       (SELECT jsonb_build_object
//                         (
//                         'id', answer_id,
//                         'body', body,
//                         'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000), 'DD/MM/YYYY HH24:MI:SS'),
//                         'answerer_name', answerer_name,
//                         'helpfulness', helpful,
//                         'photos',
//                           (SELECT jsonb_agg(url) FROM Photos where photos.answer_id = answers.answer_id)
//                         )
//                       )
//                     ) from Answers where Answers.question_id_questions = question.id)
//                   )
//               ) FROM Question where product_id = 5 AND reported = false limit 5 OFFSET (1 * 5) - 5
//         )
//     )

//     SELECT json_build_object
//     (
//         'product_id', 5,
//         'results',
//       (SELECT json_agg
//         (json_build_object
//           (
//           'question_id', id,
//           'question_body', question_body,
//           'question_date', TO_CHAR(TO_TIMESTAMP(question_date / 1000), 'DD/MM/YYYY HH24:MI:SS'),
//           'asker_name', asker_name,
//           'question_helpfulness', question_helpfulness,
//           'reported', reported,
//           'answers',
//             (SELECT json_object_agg
//               (answer_id,
//                 (SELECT json_build_object
//                   (
//                   'id', answer_id,
//                   'body', body,
//                   'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000), 'DD/MM/YYYY HH24:MI:SS'),
//                   'answerer_name', answerer_name,
//                   'helpfulness', helpful,
//                   'photos',
//                     (SELECT json_agg(url) from Photos where photos.answer_id = answers.answer_id)
//                   )
//                 )
//               ) from Answers where Answers.question_id_questions = question.id)
//           )
//         ) from Question where product_id = 5 AND reported = false limit 5 OFFSET (1 * 5) - 5
//       )
//     )