var express = require('express')
var router = express.Router()

var { exponentializeNumbers } = require('../controllers/calculatorController')

router.get('/exponentation', (req, res) => {
    exponentializeNumbers(req, res)
})

module.exports = router