var axios = require('axios')

const makeAPICall = url => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => response.data).then(result => resolve(result)).catch(error => reject(error))
    })
}

module.exports = {
    makeAPICall
}