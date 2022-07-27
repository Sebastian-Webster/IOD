var express = require('express')
var router = express.Router()

var { exponentializeNumbers, previousResults } = require('../controllers/calculatorController')

router.get('/exponentation', (req, res) => {
    exponentializeNumbers(req, res)
})

router.get('/previousResults', (req, res) => {
    previousResults(req, res);
})

module.exports = router