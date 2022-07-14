class CarRegistrations {
    constructor(arrayToInitializeWith) {
        if (!Array.isArray(arrayToInitializeWith)) arrayToInitializeWith = []
        this.set = new Set(arrayToInitializeWith)
    }

    addValue(value) {
        this.set.add(value)
        return this;
    }

    deleteValue(value) {
        this.set.delete(value)
        return this;
    }

    hasValue(value) {
        return this.set.has(value);
    }

    returnSet() {
        return this.set;
    }
}

const carRegistrations = new CarRegistrations(['ABCXYZ']);

carRegistrations.addValue('ABCXYZ') //Won't be added again because this is already in the set
carRegistrations.addValue('XYZABC') //Will get added to the set because this is not already in the set
carRegistrations.addValue('ABC123')
carRegistrations.addValue(1) //Gets added because there is not already a number 1 in the set
carRegistrations.addValue('1') //Gets added because there is not already a string '1' in the set

carRegistrations.addValue('ABCDEF').addValue('abcdef').deleteValue('abcdef')

console.log(carRegistrations.returnSet())

console.log(carRegistrations.hasValue(1))

