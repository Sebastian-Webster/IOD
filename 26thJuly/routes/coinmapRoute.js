var express = require('express')
var router = express.Router()

var { callCoinmapAPI } = require('../controllers/coinmapController')

router.get('/', (req, res) => {
    callCoinmapAPI(req, res)
})

module.exports = router