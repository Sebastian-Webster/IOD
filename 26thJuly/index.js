var testRoute = require('./routes/myTestRoute');
var calculatorRoute = require('./routes/calculatorRoute')
var calculatorV2Route = require('./routes/calculatorV2Route')
var pugRoute = require('./routes/pugRoute')
var coinmapRoute = require('./routes/coinmapRoute')
var SocialSquareRoute = require('./routes/SocialSquareRoute')

var cors = require('cors');

const express = require('express')
const swaggerUi = require('swagger-ui-express');
const ports = [80, 443, 3000, 8080, 12345]

const servers = []

ports.forEach(port => {
    let app = express()
    
    servers.push(app)
})

servers.forEach((server, index) => {
    server.use(cors())

    server.use('/', express.static('public')) //This line of code makes the css files available
    //server.get('/', express.static('public')) //This one doesn't
    
    server.use('/mytest', testRoute);
    server.use('/calculator', calculatorRoute)
    server.use('/calculatorV2', calculatorV2Route)
    server.use('/pug', pugRoute)
    server.use('/coinmap', coinmapRoute)
    server.use('/socialsquare', SocialSquareRoute)

    server.set('view engine', 'pug')
    
    const swaggerDocument = require('./swagger.json');
    server.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );

    //Assume 404 because no middleware responded
    server.use((req, res) => res.status(404).render('404', {url: req.originalUrl}))
        
    server.listen(ports[index], () => {
        console.log(`Server ${index + 1} listening at http://localhost:${ports[index]}`)
    })
})