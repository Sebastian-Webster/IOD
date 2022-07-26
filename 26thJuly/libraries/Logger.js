const {v4: uuid} = require('uuid')

class Logger {
    constructor() {
        this.id = uuid()
    }

    log(log) {
        console.log(`[Logger-${this.id}]: ${log}`)
    }
}

module.exports = Logger