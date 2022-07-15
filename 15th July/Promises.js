let promiseValue = new Promise(function(resolve, reject) { //Promise constructor
    const number = Math.random()
    if (number < 0.5) {
        resolve(number)
    } else {
        reject(new Error('Not less than 0.5'))
    }
})

promiseValue.then(result => console.log(result)).catch(error => console.error(error)) //Consumer

promiseValue.then(
    (result) => console.log(result),
    (error) => console.error(error)
) //Consumer

promiseValue.then((result, error) => {
    if (result) {
        console.log(result)
    } else if (error) {
        console.error(error)
    }
}) //Consumer