function sum(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw Error('You can only add numbers, not any other type.')
    return a+b
}

module.exports = sum;