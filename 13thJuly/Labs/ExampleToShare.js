//Primitive types are types that can only store one value, such as a number, string, boolean, bigint.
let primitive1 = "This is a string. I am primitive because I can only store 1 value.";
let primitive2 = 100; //This is a number. It is primitive because it can only store 1 number.
let primitive3 = true; //This is a boolean. It is primitive because it can only store 1 boolean.
let primitive4 = 123123123123n; //This is a bigint. It is primitive because it can only store 1 bigint.


// When you create a copy of a primitive variable, you copy the value of the variable into the new variable.
let copy1 = primitive1;
let copy2 = primitive2;
let copy3 = primitive3;
let copy4 = primitive4;
// copy1 will have the same value (data) as primitive1.
// copy2 will have the same value (data) as primitive2 and so on...

//If we change the values of the copies, the original variables' values will not change.
//So when we change copy1 to something else...
copy1 = 'This is a new string';
//...the value of primitive1 will not change.
console.log(primitive1);
console.log(copy1);
console.log(primitive1 === copy1); //Will return false because the values are different.

//Same with copy2...
copy2 = 200;
console.log(primitive2);
console.log(copy2);
console.log(primitive2 === copy2); //Will return false because the values are different.

//This shows that primitive variables are pass by value; they pass their value onto their copies.

//Arrays and objects are not primitive though. They can store more than one value.

/*
When you create a non-primitave variable, the value of it is the memory address to the data. The variable does not store any of the object or array's values.
e.g:
const object = {name: 'Sebastian', age: 15, company: 'SquareTable', isAdmin: true}
Under the hood this object's value is the memory address of the object. For example: 0x6dfed4.
Since the variable's value is actually just a memory address and not the array or object itself, when we copy the variable, the new variable's value is just the memory address (reference) of the object/array.
So:
const copyObject = object;
copyObject's value will be the memory address (reference) of the object.
For this example, copyObject and object will both have the value (memory address/reference) be 0x6dfed4.
*/

//Let's see this in action...
const object = {name: 'RandomPerson', age: 15, company: 'SquareTable', isAdmin: true};
const object2 = object;
object2.name = "Sebastian"
console.log(object.name); //Will return Sebastian
console.log(object2.name); //Will return Sebastian
console.log(object === object2); //Will return true

//This example shows that when we copy an object, we are copying the memory address of the object.
//Both variables are pointing to the same object in memory, so they both have the same values.
//This means that non-primitive variables are pass by reference. They pass the memory address of the data onto their copies and not the actual data itself.


/*
Short answer: 
When copying a primitive variable (one that can only store on value) you are copying the data because the variable stores that data.
When copying a non-primitive variable (one that can store more than one value (object/array)) you are copying the memory address of the object.
Any changes you make to a copy of a non-primitave variable will affect the original non-primitive variable.
*/