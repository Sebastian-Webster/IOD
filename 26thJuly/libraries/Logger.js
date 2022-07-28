const {v4: uuid} = require('uuid')

class Logger {
    constructor() {
        this.id = uuid()
    }

    log(log) {
        const date = new Date()
        let hours = date.getHours();
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        if (hours < 10) hours = '0' + hours
        if (minutes < 10) minutes = '0' + minutes
        if (seconds < 10) seconds = '0' + seconds
        console.log(`[Logger-${this.id} at ${hours}:${minutes}:${seconds}]: ${log}`)
    }
}

module.exports = Logger