var express = require('express')
var router = express.Router();
var { returnPreviousResults } = require('../controllers/calculatorController')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hey',
        message: 'Hello there!',
        vegetables: [
            {
                name: 'Brocolli',
                imageURL: 'https://www.thegoodmoodfood.com.au/siteassets/foods/green/broccoli-lg.png'
            },
            {
                name: 'Lettuce',
                imageURL: 'https://www.bordbia.ie/globalassets/bordbia2020/food-and-living/best-in-season-2020/salads/lettuce-iceberg.png'
            },
            {
                name: 'Eggplant',
                imageURL: 'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjQ5MDU3OTBmOWVkM2ZhZTI1YWVkN2I1MDdiMWUxMDAwIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=04c59a20e64a6171c1c37f7a357e84de1cd97541ffdeab0475b5a241f3fa9800'
            }
        ]
    })
})

router.get('/previousResults', (req, res) => {
    res.render('previousResults', {
        title: 'Previous Results',
        previousResults: returnPreviousResults()
    })
})

module.exports = router;