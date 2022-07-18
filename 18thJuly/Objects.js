let person = {
    firstName: 'John',
    lastName: 'Richardson',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    getThis() {
        return this;
    }
}

console.log(person.getFullName());

let person2 = person;

person = {}

console.log(person2.getFullName());

console.log(person2.getThis())