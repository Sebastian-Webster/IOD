var { makeAPICall } = require('../APIHelper/coinmap')
var Coinmap = require('../libraries/Coinmap')
var Logger = require('../libraries/Logger')
var coinmap = new Coinmap()
var logger = new Logger()

const coinmapCacheName = 'coinmapCache'

const NodeCache = require( "node-cache" );
const JSONCache = new NodeCache({ stdTTL: 20000, checkperiod: 20000, deleteOnExpire: false });

JSONCache.on('expired', (key, value) => {
    logger.log(`${coinmapCacheName} has expired so redownloading...`)
    refreshCache(key)
})

function refreshCache(key) {
    logger.log(`Downloading ${coinmapCacheName}...`)
    return new Promise((resolve, reject) => {
        makeAPICall('https://coinmap.org/api/v1/venues/')
        .then(result => result.venues)
        .then(result => {
            const success = JSONCache.set(key, result)
            if (success) {
                resolve(result)
                logger.log(`Successfully received and saved ${key} cache.`)
            } else {
                console.error('An error occured while saving JSON cache to cache.')
                reject()
            }
        })
        .catch(error => {
            console.error('An error occured while refreshing JSON Cache')
            console.error(error)
            reject(error)
        })
    })
}

refreshCache(coinmapCacheName)

const callCoinmapAPI = (req, res) => {
    let value = JSONCache.get(coinmapCacheName)
    if (value) {
        coinmap.checkForErrors(value, req, res)
    } else {
        res.status(503).json({
            status: "FAILED",
            error: 'API data is still caching. Please come back soon.'
        })
    }
}

module.exports = {
    callCoinmapAPI
}