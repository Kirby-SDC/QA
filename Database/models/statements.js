//All statements for queries

module.exports.getQuestionsText = getQuestionsText =
  `SELECT
  json_build_object(
    'product_id'
  , $1::integer
  , 'results'
  , (
      SELECT
        json_agg(
          json_build_object(
            'question_id'
          , id
          , 'question_body'
          , question_body
          , 'question_date'
          , to_char(to_timestamp(question_date / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
          , 'asker_name'
          , asker_name
          , 'question_helpfulness'
          , question_helpfulness
          , 'reported'
          , reported
          , 'answers'
          , (
              SELECT
                json_object_agg(
                  answer_id
                , (
                    SELECT
                      json_build_object(
                        'id'
                      , answer_id
                      , 'body'
                      , body
                      , 'date'
                      , to_char(to_timestamp(date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
                      , 'answerer_name'
                      , answerer_name
                      , 'helpfulness'
                      , helpful
                      , 'photos'
                      , (
                          SELECT
                            coalesce(json_agg(url), '[]'::json)
                          FROM
                            photos
                          WHERE
                            photos.answer_id = answers.answer_id
                        )
                      )
                  )
                )
              FROM
                answers
              WHERE
                answers.question_id_questions = question.id
            )
          )
        )
      FROM
        question
      WHERE
        product_id = $1::integer AND
        reported = FALSE
      LIMIT $2::integer OFFSET $3::integer
    )
  )`;

module.exports.getAnswersText = getAnswersText =
  `SELECT
  json_build_object(
    'question'
  , $1::integer
  , 'page'
  , $3::integer
  , 'count'
  , $2::integer
  , 'results'
  , (
      SELECT
        json_agg(
          json_build_object(
            'answer_id'
          , answer_id
          , 'body'
          , body
          , 'date'
          , to_char(to_timestamp(date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
          , 'answerer_name'
          , answerer_name
          , 'helpfulness'
          , helpful
          , 'photos'
          , (
              SELECT
                coalesce(
                  json_agg(
                    json_build_object(
                      'id'
                    , id
                    , 'url'
                    , url
                    )
                  )
                , '[]'::json
                )
              FROM
                photos
              WHERE
                answer_id = question_id_questions
            )
          )
        )
      FROM
        answers
      WHERE
        question_id_questions = $1::integer AND
        answers.reported = false
      LIMIT $2::integer OFFSET $4::integer
    )
  )`;

module.exports.postAnswersText = postAnswersText =
  `INSERT INTO answers
    VALUES(
      DEFAULT
    , $1::integer
    , $2::varchar
    , $3::bigint
    , $4::varchar
    , $5::varchar
    , $6::boolean
    , $7::integer
    )
    RETURNING
      answer_id`;

module.exports.postQuestionText = postQuestionsText =
  `INSERT INTO question
    VALUES(
      DEFAULT
    , $1::integer
    , $2::varchar
    , $3::bigint
    , $4::varchar
    , $5::varchar
    , $6::boolean
    , $7::integer
    )
    RETURNING
      id`;

module.exports.putAhelpfulText = putAhelpfulText =
  `UPDATE
    answers
  SET
    helpful = helpful + 1
  WHERE
    answer_id = $1::integer`;

module.exports.putQhelpfulText = putQhelpfulText =
  `UPDATE
    question
  SET
    question_helpfulness = question_helpfulness + 1
  WHERE
    id = $1::integer`;

module.exports.putAreportText = putAreportText =
  `UPDATE
    answers
  SET
    reported = TRUE
  WHERE
    answer_id = $1::integer`;

module.exports.putQreportText = putQreportText =
  `UPDATE
    question
  SET
    reported = TRUE
  WHERE
    id = $1::integer`;
module.exports.postAnswerSubText = postAnswerSubText =
  `INSERT INTO photos
    VALUES(
      DEFAULT
    , $1::integer
    , $2::varchar
    )`;
