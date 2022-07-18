let obj = {
    name: "Sebastian"
}

var greeting = function(a,b,c) {
    return "Welcome " + this.name + " to " + a + " " + b + " in " + c;
}

console.log(greeting.call(obj, "Newtown", "Sydney", "Australia")) //function_name.call[0] is the context, (object provided willbe the value of the this keyword) and everything else is arguments to provide to the function on instant execution
//Both function_name.call and function_name.apply gets executed immediately
console.log(greeting.apply(obj, ["Newtown", "Sydney", "Australia"])) //function_name.apply is the same as function_name.call but the arguments are supplied as an array instead of being supplied seperately


var bound = greeting.bind(obj) //Binding object to greeting function. this keyword will be the object's value

console.dir(bound) //Logs function

console.log(bound("Newton", "Sydney", "Australia")) //Pass parameters to bound function and call it