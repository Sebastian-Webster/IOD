const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/simpleAPI', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
    .then(result => {
        res.status(200).json({
            message: "Received data",
            data: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Couldn't retrieve data",
            error
        })
    })
})

const port = 4000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})