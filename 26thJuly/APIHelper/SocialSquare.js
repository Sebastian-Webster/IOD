var axios = require('axios')

const getUserWithName = (name) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://it-solutions.homedns.org:9443/publicApis/userAPI/${name}`)
        .then(response => response.data)
        .then(response => {
            axios.get(`http://it-solutions.homedns.org:9443/getImageOnServer/${response.data.profileImageKey}`).then(response => response.data)
            .then(result => {
                const data = {
                    ...response.data,
                    profileImageURL: 'data:image/jpeg;base64,' + result
                }

                resolve(data)
            })
            .catch(error => reject(error?.response?.data))
        })
        .catch(error => reject(error?.response?.data))
    })
}

module.exports = {
    getUserWithName
}