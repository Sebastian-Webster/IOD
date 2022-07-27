var express = require('express')
var router = express.Router();

var { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, modulusNumbers } = require('../controllers/calculatorController')

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

router.get('/modulus', (req, res) => {
    modulusNumbers(req, res)
})

module.exports = router;