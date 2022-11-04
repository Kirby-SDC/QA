const express = require('express')
const router = express.Router()
const getQuestions = require('../controllers/getQuestions')
const postQuestion = require('../controllers/postQuestion')
const getAnswers = require('../controllers/getAnswers')
const postAnswer = require('../controllers/postAnswer')
const putQhelpfuls = require('../controllers/putQhelpful')
const putAhelpfuls = require('../controllers/putAhelpful')
const reportAnswers = require('../controllers/reportAnswer')
const reportQuestions = require('../controllers/reportQuestion')

//get all questions at a product id
router.get('/qa/questions', getQuestions.getQuestions)
//add a question at a product id
router.post('/qa/questions', postQuestion.postQuestion)
//get all answers at a question id
router.get('/qa/questions/:question_id/answers', getAnswers.getAnswers)
//add an answer at a question id
router.post('/qa/questions/:question_id/answers', postAnswer.postAnswer)
//update helpful count of a question
router.put('/qa/questions/:question_id/helpful', putQhelpfuls.putQhelpful);
//update helpful count of an answer
router.put('/qa/answers/:answer_id/helpful', putAhelpfuls.putAhelpful);
//report an answer
router.put('/qa/answers/:answer_id/report', reportAnswers.reportAnswer);
//report a question
router.put('/qa/questions/:question_id/report', reportQuestions.reportQuestion);
module.exports = router;