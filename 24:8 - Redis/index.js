const express = require("express");
const axios = require("axios");
const redis = require('redis');
const cron = require('node-cron')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

let redisClient;

(async () => { //IIFE - Immediately Invoked Function Expression
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function fetchApiData(species) {
    const apiResponse = await axios.get(
        `https://www.fishwatch.gov/api/species/${species}`
    );
    console.log("Request sent to the API");
    return apiResponse.data;
}
    
async function getSpeciesData(req, res) {
    const species = req.params.species;
    let results;
    let isCached = false;
    
    try {
        const cacheResults = await redisClient.get(species);
        if (cacheResults) {
            isCached = true;
            results = JSON.parse(cacheResults);
        } else {
            results = await fetchApiData(species);
            if (results.length === 0) {
                throw "API returned an empty array";
            }
            await redisClient.set(species, JSON.stringify(results), {
                //EX: 10 * 60, //seconds until expiry,
                //NX: true //Only set the key if it does not already exist
            });
        }
        res.send({
            fromCache: isCached,
            data: results,
        });
    } catch (error) {
        console.error(error);
        res.status(404).send("Data unavailable");
    }
}

const clearCache = () => {
    redisClient.flushAll();
    console.log('Cleared cache')
}

const updateCache = async () => {
    try {
        const keys = await redisClient.keys('*')
        for (const item of keys) {
            const result = await fetchApiData(item);
            if (result.length === 0) {
                throw "API returned an empty array"
            }
            await redisClient.set(item, JSON.stringify(result), {
                //EX: 10 * 60, //Seconds until expiry,
                //NX: true //Only set the key if it does not already exist
            })
            console.log(`Updated ${item} key in cache`)
        }
        console.log(`Updated ${keys.length} cache items`)
    } catch (error) {
        console.error('An error occured while updating caches')
        console.error(error)
    }
}

updateCache()

//cron.schedule('0-59 * * * * * ', clearCache) //Runs every second
//cron.schedule('0-59 * * * *', clearCache) //Runs every minute
cron.schedule('0-59 * * * *', updateCache) //Runs every minute

async function clearCacheRoute(req, res) {
    console.log('Trying to clear cache...')
    try {
        clearCache()
        res.send('Cleared cache')
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: String(error)
        })
    }
}

app.use(cors())
app.get("/fish/:species", getSpeciesData);
app.get('/clearCache', clearCacheRoute)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});