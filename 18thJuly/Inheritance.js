let person = {
    name: 'John Doe',
    greet: function() {
        return "Hi, I'm " + this.name;
    }
}

console.log(person.greet());

let teacher = Object.create(person);
teacher.name = "Gary"
console.log(teacher.greet());

let teacher2 = Object.create(person, {
    name: {value: "Sebastian"}, //If this is not here, the value will be 'John Doe'.
    teach: {value: function(subject) {
        return "I " + this.name + " can teach " + subject
    }}
})

console.log(teacher2.teach("JavaScript"))

let animal = {
    name: "Animal",
    makesSound: 'Sound',
    flies: false,
    eatsMeat: true
}

let cat = Object.create(animal, {
    name: {value: "Cat"},
    makesSound: {value: "Meow"}
})

let pigeon = Object.create(animal, {
    name: {value: "Pigeon"},
    flies: {value: true},
    makesSound: {value: "Coo"}
})

let snowGoose = Object.create(animal, {
    name: {value: "Snow Goose"},
    eatsMeat: {value: false},
    flies: {value: true},
    makesSound: {value: "Cluck"}
})

console.log(animal)
console.log(cat.makesSound);
console.log(pigeon.makesSound);
console.log(snowGoose.makesSound);

class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
        console.log('Inside Person constructor')
    }
    greet() {
        return "Hi, I'm " + this.name;
    }
}

let personObj = new Person("Sebastian", "Auckland")
console.log(personObj)
console.log(personObj.greet())

class Student extends Person {
    constructor(name, city) {
        console.log('Inside Student constructor')
        super(name, city); //Calls the parent constructor; calls Parent constructor
    }

    greet() {
        return 'Hi I am student ' + this.name
    }

    learn(subject) {
        return this.name + ' is learning ' + subject
    }
}

let studentObj = new Student("Sebastian", "Auckland")

console.log(studentObj.greet())
console.log(studentObj.learn("JavaScript"))

class Shape {
    constructor(sides, color, name, width, height) {
        this.sides = sides;
        this.color = color;
        this.name = name;
        this.width = width;
        this.height = height;
    }

    getSides() {
        return this.sides;
    }

    getColor() {
        return this.color
    }

    getName() {
        return this.name
    }

    getArea(fancy) {
        const area = this.width * this.height
        return fancy == true ? `The area of ${this.name} is ${area} units squared.` : area
    }
}

class Rectangle extends Shape {
    constructor(color = 'red', width = 100, height = 200) {
        super(4, color, 'Rectangle', width, height)
    }
}

class Circle extends Shape {
    constructor(color = 'red', diameter = 100) {
        super(Infinity, color, 'Circle', diameter)
    }

    getArea(fancy) {
        const area = Math.PI * (this.width / 2) ** 2
        return fancy == true ? `The area of ${this.name} is ${area} units squared.` : area
    }
}

class Square extends Shape {
    constructor(color = 'red', width = 100) {
        super(4, color, 'Square', width)
    }

    getArea(fancy) {
        const area = this.width ** 2
        return fancy == true ? `The area of ${this.name} is ${area} units squared.` : area
    }
}

const RectangleObject = new Rectangle('Blue', 36, 24)
const CircleObject = new Circle();
const SquareObject = new Square('orange')

console.log(RectangleObject)
console.log(CircleObject)
console.log(SquareObject)

console.log(RectangleObject.getArea(false))
console.log(CircleObject.getArea(false))
console.log(SquareObject.getArea(false))

console.log(RectangleObject.getArea(true))
console.log(CircleObject.getArea(true))
console.log(SquareObject.getArea(true))

console.log(`${RectangleObject.getName()} has ${RectangleObject.getSides()} sides, is the color ${RectangleObject.getColor()}, and has an area of ${RectangleObject.getArea(false)} units squared.`)
console.log(`${CircleObject.getName()} has ${CircleObject.getSides()} sides, is the color ${CircleObject.getColor()}, and has an area of ${CircleObject.getArea(false)} units squared.`)
console.log(`${SquareObject.getName()} has ${SquareObject.getSides()} sides, is the color ${SquareObject.getColor()}, and has an area of ${SquareObject.getArea(false)} units squared.`)