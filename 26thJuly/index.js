const express = require('express')
const app = express()
const port = 3000

const app2 = express()
const port2 = 3001

app.get('/', express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app2.get('/', (req, res) => {
    res.send('Hello World! This server is running on port ' + port2)
})

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
})