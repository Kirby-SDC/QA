const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questions')

router.get('/qa/questions', questionsController.allQ)

module.exports = router;