const axios = require('axios')

const fish = [
    'blueline-tilefish',
    'red-snapper',
    'sablefish',
    'cobia',
    'crimson-jobfish',
    'atlantic-chub-mackerel',
    'atlantic-cod',
    'american-lobster',
    'pacific-wahoo',
    'alaska-pollock',
    'summer-flounder',
    'caribbean-spiny-lobster',
    'wreckfish',
    'pacific-spiny-dogfish'
]

for (const item of fish) {
    const url = `http://localhost:3000/fish/${item}`
    axios.get(url)
    .then(() => {
        console.log('Received ' + item + ' data.')
    })
    .catch(error => {
        console.error('An error occured while trying to get item ' + item + ' :')
        console.error(String(error))
        console.error(url)
    })
}