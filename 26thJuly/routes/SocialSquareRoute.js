var express = require('express')
var router = express.Router()
var { getUserWithName } = require('../APIHelper/SocialSquare')
var Logger = require('../libraries/Logger')
var logger = new Logger()

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/SocialSquare/index.html')
})

router.get('/getUser', (req, res) => {
    if (req.query.username) {
        getUserWithName(req.query.username)
        .then(result => {
            const data = {
                name: req.query.username,
                ...result
            }
            if (req.query.returnjson == 'true') res.status(200).json(data)
            else res.render('SocialSquareUser', data)
        })
        .catch(error => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(500).json({
                    status: "FAILED",
                    message: "An error occured."
                })
            }
        })
    } else {
        res.status(400).json({
            status: "FAILED",
            message: "No username was passed."
        })
    }
})

module.exports = router