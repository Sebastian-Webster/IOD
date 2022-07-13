var _ = require('lodash');
let e1 = {
    name: "Sebastian",
    age: 15,
    projects: {
        SocialSquare: {
            startDate: "June 20th 2021"
        }
    }
}

let e4 = _.cloneDeep(e1)
let e2 = {...e1}
e2.projects.SocialSquare.startDate = "22nd May 1452"
let e3 = Object.assign({hello: "hello"}, e1)

console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)

class User {
    constructor(name, age, company, isAdmin) {
        this.name = name;
        this.age = age;
        this.company = company;
        this.isAdmin = isAdmin;
    }

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }

    setCompany(company) {
        this.company = company;
    }
}

const Seb = new User("Sebastian", 15, "Google", false);
console.log(Seb);
Seb.toggleAdmin();
console.log(Seb);
Seb.setCompany("SquareTable");
console.log(Seb);

// Arrow functions don't work as methods but functions do
let ladder = {
    step: 0,
    /*This won't work as the arrow function will only return this as {step: NaN} as undefined++ is NaN
    up: () => {
        this.step++;
        return this;
    },
    */
   /*This will work as it is being made a method of ladder so this will return the ladder object
    up() {
        this.step++;
        return this;
    },
    */
    up: function() { //This will also work as it is being made a method of ladder so this will return the ladder object
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        return this.step;
    }
}
console.log(ladder.up());
console.log(undefined++);

const object = {name: 'Sebastian', age: 15, company: 'SquareTable', isAdmin: true};

for (const key in object) {
    console.log(key);
}

console.log('name' in object); //Will return true
console.log('age' in object); //Will return true
console.log('company' in object); //Will return true
console.log('isAdmin' in object); //Will return true
console.log('address' in object); //Will return false as address is not a key in the object
delete object.isAdmin; //Deletes the isAdmin key value pair in the object
console.log('isAdmin' in object); //Will return false as isAdmin is now deleted

console.log(Object.is(NaN, NaN)); //Will return true
console.log(Object.is(null, undefined)) //Will return false
console.log(Object.is(0, -0)) //Will return false
console.log(Object.is(0, 0)) //Will return true
console.log(Object.is(null, null)) //Will return true

console.log(1.238.toFixed(2)); //Will return 1.24
console.log(1.2.toFixed(4)) //Will return 1.2000
console.log(+1.238.toFixed(2))
console.log(typeof +1.238.toFixed(2)); //Will return number

console.log(Object.is(0b11111111, 0o377)); //Will return true
console.log(123456..toString(2))
console.log(123456..toString(8))
console.log(123456..toString(16))
console.log(123456..toString(36))

console.log(Number('1234ab56')) //Will return NaN
console.log(parseInt('1234ab56')) //Will return 1234
console.log(parseInt('2n9c', 36)) //Will return 123456

console.log(parseFloat('12.34ab56')) //Will return 12.34
console.log(parseFloat('2n9c')) //Will return 2
console.log(parseFloat('4.5.5abc')) //Will return 4.5
console.log(parseFloat('a4.5')) //Will return NaN
// If there is a letter at the start, parseFloat will return NaN

console.log(0.1 + 0.2)
console.log((0.1 + 0.2).toFixed(1))

console.log('b' == 'B')
console.log('A'.length)
console.log('😛'.length)

const string = 'Hello \n World! \n This is a double quote \" and this is a single quote \' and this is a backslash \\ and this is a unicode character \uD83D\uDE01\u{1F60D}'
console.log(string)

console.log(isNaN(NaN)) //Will return true
console.log(isNaN("abc" / 6)) //Will return true
console.log(isNaN(Infinity)) //Will return false
console.log(isNaN(1 + 2)) //Will return false

console.log(isFinite(Infinity)) //Will return false
console.log(isFinite(NaN)) //Will return false
console.log(isFinite(1 + 2)) //Will return true
console.log(isFinite(1 / 0)) //Will return false
console.log(isFinite(0 / 0)) //Will return false
console.log(isFinite(0)) //Will return true
console.log(isFinite(0.1)) //Will return true

class QueueImplementation {
    constructor(start) {
        if (Array.isArray(start)) {
            this.array = start;
        } else {
            this.array = [];
        }
    }

    add(value) {
        this.array.unshift(value);
        return this.array;
    }

    remove() {
        this.array.shift();
        return this.array;
    }

    logArray() {
        console.log(this.array);
    }
}

class StackImplementation {
    constructor(start) {
        if (Array.isArray(start)) {
            this.array = start;
        } else {
            this.array = [];
        }
    }

    add(item) {
        this.array.push(item)
        return this.array;
    }

    remove() {
        this.array.shift();
        return this.array;
    }

    logArray() {
        console.log(this.array);
    }
}

const queueImplementation = new QueueImplementation([1, 2, 3]);
console.log(queueImplementation.add(4));
console.log(queueImplementation.remove());

const stackImplementation = new StackImplementation([1, 2, 3]);
console.log(stackImplementation.add(4));
console.log(stackImplementation.remove());