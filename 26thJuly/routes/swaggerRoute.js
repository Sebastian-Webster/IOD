var express = require('express')
var router = express.Router()
var SwaggerPetstore = require('swagger_petstore');
var defaultClient = SwaggerPetstore.ApiClient.instance;

var api = new SwaggerPetstore.PetApi()

router.get('/getPetById/:id', (req, res) => {
    let id = req.params.id;
    api.getPetById(id, (error, data, response) => {
        if (error) {
            console.error(error);
            res.send(error)
        } else {
            console.log('API called successfully.');
            console.log(data)
            res.json(data)
        }
    })
})

module.exports = router