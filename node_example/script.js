const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/website', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})