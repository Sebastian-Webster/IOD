var testRoute = require('./routes/myTestRoute');
var calculatorRoute = require('./routes/calculatorRoute')
var calculatorV2Route = require('./routes/calculatorV2Route')

var cors = require('cors');

const express = require('express')
const swaggerUi = require('swagger-ui-express');
const ports = [80, 443, 3000, 8080]

const servers = []

ports.forEach(port => {
    let app = express()
    
    servers.push(app)
})

servers.forEach((server, index) => {
    server.use(cors())
    
    server.get('/', express.static('public'))
    
    server.use('/mytest', testRoute);
    server.use('/calculator', calculatorRoute)
    server.use('/calculatorV2', calculatorV2Route)
    
    const swaggerDocument = require('./swagger.json');
    server.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );
        
    server.listen(ports[index], () => {
        console.log(`Example app listening at http://localhost:${ports[index]}`)
    })
})