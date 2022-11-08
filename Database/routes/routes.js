const express = require('express')
const router = express.Router()
const getQuestions = require('../models/getQuestions')
const postQuestion = require('../models/postQuestion')
const getAnswers = require('../models/getAnswers')
const postAnswer = require('../models/postAnswer')
const putQhelpfuls = require('../models/putQhelpful')
const putAhelpfuls = require('../models/putAhelpful')
const reportAnswers = require('../models/reportAnswer')
const reportQuestions = require('../models/reportQuestion')
const loaderKey = require('../utils/loaderio-22fd77ff2528d28c4d69b227d695ba6f.txt')

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

//report a question
router.put('/qa/questions/:question_id/report', reportQuestions.reportQuestion);
//report an answer
router.put('/qa/answers/:answer_id/report', reportAnswers.reportAnswer);

//loadtesting
router.get('/loaderio-22fd77ff2528d28c4d69b227d695ba6f.txt',(err, res) => res.end(loaderKey))
module.exports = router;