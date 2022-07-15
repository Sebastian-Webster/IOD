const seperate = (timesToRun = 1) => {for (let i = 0; i < timesToRun; i++) {console.log('\n---------------------------------------------\n')}}
seperate()
try {
    console.log(1..toPrecision(999999))
} catch (e) {
    console.error('A RangeError occured:')
    console.error(e)
}
seperate(2)

try {
    console.log(myNewArray)
} catch (e) {
    console.error('A ReferenceError occured:')
    console.error(e)
}
seperate(2)

try {
    let myFunction;
    myFunction()
} catch (e) {
    console.error('A TypeError occured:')
    console.error(e)
}
seperate(2)

try {
    console.log('This will run')
} catch (e) {
    console.error(e)
} finally {
    console.log('And this will run as well...')
}
seperate(2)

try {
    const hi= 'hi'
    hi = 'bye'
    console.log('This will not run because this block will throw an error.')
} catch {
    console.log('This will run because the try block threw an error.')
} finally {
    console.log('And this will also run.')
}
seperate()