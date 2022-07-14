var CountUser = require('./visitsCount.js')

let john = {name: "John"}
CountUser(john)
CountUser(john)
CountUser(john)
CountUser(john)
CountUser(john)
console.log(CountUser(john))
john = null;