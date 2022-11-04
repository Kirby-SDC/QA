// {
//   "product_id": "37311",
//     "results":
//       [
//         {
//             "question_id": 640827,
//             "question_body": "How comfy are these shoes?",
//             "question_date": "2022-05-20T00:00:00.000Z",
//             "asker_name": "Sam",
//             "question_helpfulness": 159,
//             "reported": false,
//             "answers":
//               {
//                   "5985803":
//                     {
//                         "id": 5985803,
//                         "body": "test",
//                         "date": "2022-05-31T00:00:00.000Z",
//                         "answerer_name": "test1",
//                         "helpfulness": 2,
//                         "photos": []
//                     },

//               }
//         }
//       ]
// }

"https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",

"https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",

"https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"

SELECT json_build_object
(
      'product_id', 1,
	  'results',
	(SELECT json_agg
		(json_build_object
			(
			'question_id', 5,
			'question_body', 2,
			'question_date', 3,
			'asker_name', 4,
			'question_helpfulness', 5,
			'reported', 6,
			'answers',
				(SELECT json_build_object
					(
					'123456',
						(SELECT json_build_object
							(
							'id', 1,
							'body', 2,
							'date', 3,
							'answerer_name', 4,
							'helpfulness', 5,
							'photos',
								(SELECT json_agg(1) from Photos where answer_id = 5)
							) from Answers where answer_id = 1)
					) from Answers where answer_id = 1)
			)
		) from Question where product_id = 5
	)
)

SELECT json_build_object
(
      'product_id', 1,
	  'results',
	(SELECT json_agg
		(json_build_object
			(
			'question_id', id,
			'question_body', question_body,
			'question_date', question_date,
			'asker_name', asker_name,
			'question_helpfulness', question_helpfulness,
			'reported', reported,
			'answers',
				(SELECT json_build_object
					(
					answer_id,
						(SELECT json_build_object
							(
							'id', answer_id,
							'body', body,
							'date', date_written,
							'answerer_name', answerer_name,
							'helpfulness', helpful,
							'photos',
								(SELECT json_agg(url) from Photos where photos.id = answers.answer_id)
							) from Answers where question_id_questions = question.id)
					) from Answers where Answers.question_id_questions = question.id limit 1)
			)
		) from Question where product_id = 1
	)
)



// )