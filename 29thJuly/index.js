var express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
var ports = [80, 443, 3000]
var servers = []
const {startDatabase} = require('./database/mongo');
const {insertAd, getAds, deleteAd, updateAd, getAd} = require('./database/ads');
var methodOverride = require('method-override')

async function renderAds(res, actionMessage, error) {
    const ads = await getAds();
    let rowClass = 'row row-cols-1 d-flex justify-content-center align-items-center'
    if (ads.length > 1) rowClass += ' row-cols-md-3'
    if (ads.length > 2) rowClass += ' row-cols-lg-4'
    if (ads.length > 3) rowClass += ' row-cols-xl-5'
    res.render('index', {ads, actionMessage, error, rowClass})
}


startDatabase().then(async () => {
    console.log('DB Started')
    await insertAd({
        title: 'Ad Number One',
        seller: 'Server',
        description: 'This is ad number 1.',
        adImageURL: 'https://media.istockphoto.com/photos/number-one-golden-typeface-3d-render-illustration-picture-id625062718?k=20&m=625062718&s=612x612&w=0&h=0xy8pY9wP0qSGW1OpwMGBPBlxA2N3llqB7EXe9uGgsA='
    });
    await insertAd({
        title: 'Ad Number Two',
        seller: 'Server',
        description: 'This is ad number 2.',
        adImageURL: 'https://www.transparentpng.com/thumb/number/golden-two-number-hd-2-png-oyNHJz.png'
    });

    ports.forEach(port => {
        var app = express()
        servers.push(app)
    })
    
    servers.forEach((server, index) => {
        
        // adding Helmet to enhance your API's security
        //server.use(helmet());

        //To allow method overrides when HTML forms do not support them
        server.use(methodOverride('_method'))
        
        // using bodyParser to parse JSON bodies into JS objects
        server.use(bodyParser.json());

        //Extract HTML form data
        server.use(bodyParser.urlencoded({ extended: true }));
        
        // enabling CORS for all requests
        server.use(cors());
        
        // adding morgan to log HTTP requests
        server.use(morgan('combined'));


        server.get('/', async (req, res) => {
            renderAds(res)
        })
        
        // defining an endpoint to return all ads
        server.get('/getAds', async (req, res) => {
            res.send(await getAds());
        });

        server.post('/', async (req, res) => {
            await insertAd(req.body).catch(error => {
                renderAds(res, String(error), true)
                return
            })
            renderAds(res, 'Ad was successfully added', false)
        })

        server.delete('/:id', async (req, res) => {
            await deleteAd(req.params.id).catch(error => {
                renderAds(res, String(error), true)
                return
            })
            renderAds(res, 'Ad was successfully deleted.', false)
        })

        server.get('/editAdPage/:id', async (req, res) => {
            let ad = await getAd(req.params.id).catch(error => String(error))

            if (ad.length == 0) {
                ad = 'Ad with ID: ' + req.params.id + ' could not be found.'
            }

            if (typeof ad === 'string') res.render('editAd', {ad})
            else res.render('editAd', {ad: ad[0]})
        })

        server.put('/:id', async (req, res) => {
            const id = req.params.id;
            const newAd = {
                title: req.body.title,
                seller: req.body.seller,
                description: req.body.description,
                adImageURL: req.body.adImageURL
            }

            await updateAd(id, newAd).catch(error => {
                renderAds(res, String(error), true)
                return
            })
            renderAds(res, 'Ad was successfully updated.', false)
        })

        server.get('/getAdById/:id', async (req, res) => {
            res.status(200).json(await getAd(req.params.id))
        })

        server.set('view engine', 'pug')
        
        server.listen(ports[index], () => {
            console.log(`Server ${index + 1} is listening on port ${ports[index]}`)
        })
    })
})