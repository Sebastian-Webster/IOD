const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const app = express();

const PORT = 4000; //Add env to have port eventually

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/EnterPlayers.html'));
})

app.get('/getFile/:fileToGet', (req, res) => {
    const fileToGet = req.params.fileToGet;
    res.sendFile(path.join(__dirname, '/', fileToGet))
})

app.post('/uploadBowlingPlayers', upload.none(), (req, res) => {
    const {date, teamName, numOfPlayers} = req.body;
    const numOfRounds = 10;
    console.log(date)
    console.log(teamName)
    console.log(numOfPlayers)
    if (isNaN(numOfPlayers)) res.send('<h1>Please pass a number to number of players</h1>')
    html = '<!DOCTYPE html><html><head><title>Play</title><link rel="stylesheet" href="http://localhost:4000/getFile/bowling.css"></head><body>'
    html += '<table><thead><tr>'
    html += '<th>Player</th><th>Round 1</th><th>Round 2</th><th>Round 3</th><th>Round 4</th><th>Round 5</th><th>Round 6</th><th>Round 7</th><th>Round 8</th><th>Round 9</th><th>Round 10</th><th>Total</th>'
    html += '</tr></thead><tbody>'
    for (let i = 1; i < +numOfPlayers + 1; i++) {
        html += '<tr>'
        html += `<th>Player ${i}</th>`
        for (let round = 1; round < +numOfRounds + 1; round++) {
            html += `<td><input type="number" id="${i}-round${round}"></td>`
        }
        html += `<th id="${i}-result">0</th>`
        html += '</tr>'
    }
    html += '</tbody></table>'
    html += '</body><script>'
    html += `var numberOfRounds = ${+numOfRounds}`
    html += `function updatePlayer(playerNumber) {let values = []; for (let roundNum = 1; i < numOfRounds + 1; roundNum++) {values.push(document.getElementById(playerNumber + '-round' + roundNum))}; let total = values.reduce((accumulator, numberToAdd) = {if (isNaN(numberToAdd)) return accumulator; return accumulator + numberToAdd;}); document.getElementById(playerNumber + '-result').innerHTML = total;}`
    html += '</script></html>'
    res.send(html);
})