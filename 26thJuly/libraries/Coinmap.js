var {v4: uuid} = require('uuid')
var { filterCoinmapAPIValues } = require('../converters/coinmapConverter')

class Coinmap {
    constructor() {
        this.id = uuid()
    }

    checkForErrors(result, req, res) {
        const {category: categoryQuery} = req.query;
        const uniqueCategoryOptions = Array.from(new Set(result.map(item => item.category)))

        if (categoryQuery !== undefined && !uniqueCategoryOptions.includes(categoryQuery)) {
            res.status(400).json({
                status: "FAILED",
                message: 'category is not a valid value.'
            })
            return
        }

        if (req.query.max) {
            var maxAmount = parseInt(req.query.max)
        }

        if (categoryQuery == undefined) {
            var results = filterCoinmapAPIValues(result, 'atm', maxAmount)
        } else {
            var results = filterCoinmapAPIValues(result, categoryQuery, maxAmount)
        }

        if (req.query.fancy == 'true') {
            res.render('coinmap', {newResults: results})
        } else {
            res.status(200).json(results)
        }
    }
}

module.exports = Coinmap