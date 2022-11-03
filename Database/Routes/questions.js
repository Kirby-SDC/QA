const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/getQuestions')
const answersController = require('../controllers/getAnswers')

//get all questions at a product id
router.get('/qa/questions', questionsController.getQuestions)

//get all answers at a question id
router.get('/qa/questions/:question_id/answers', answersController.getAnswers)

module.exports = router;