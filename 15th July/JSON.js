//Start of non-cyclical object
const person = {
    name: "Sebastian",
    age: 15,
    socialSecurityNumber: 123487124762
}

function replacerFunction(key, value) {
    if (key == 'age') {
        if (typeof value === 'number') {
            if (value >= 18) {
                return '18 or older'
            } else {
                return 'Under 18'
            }
        } else {
            return 'Invalid input.'
        }
    }

    if (key == 'socialSecurityNumber') {
        return 'Removed for privacy.'
    }

    return value;
}

console.log('--------NON-CYLICAL OBJECT--------')
console.log(JSON.stringify(person, replacerFunction, 4))
console.log('----------------------------------\n')
//End of non-cyclical object

// Start of cyclical object
const personA = {
    name: "Sebastian",
    age: 15
}

const personB = {
    name: "Aden",
    age: 15,
    friends: {personA}
}

personA.friends = {personB}

function cyclicalReplacerFunction() {
    const seenItem = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seenItem.has(value)) return 'CYCLICAL_REFERENCE_REMOVED';
            seenItem.add(value)
        }
        return value;
    }
}

console.log('--------CYLICAL OBJECT--------')
console.log(JSON.stringify(personA, cyclicalReplacerFunction(), 4))
console.log('------------------------------')
//End of cyclical object