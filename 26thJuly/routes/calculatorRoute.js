var express = require('express')
var router = express.Router();

var { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } = require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    addNumbers(req, res)
})

router.get('/subtract', (req, res) => {
    subtractNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    multiplyNumbers(req, res)
})

router.get('/divide', (req, res) => {
    divideNumbers(req, res)
})

module.exports = router;