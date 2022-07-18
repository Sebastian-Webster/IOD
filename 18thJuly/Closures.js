function greeting() {
    function setName() {
        let name = "Sebastian";
        function logName() {
            console.log(name)
            return 'Logged'
        }
        return logName;
    }
    return setName;
}

console.log(greeting()()());

function greeting2() {
    let name = "Gary";
    try {
        console.log(name1)
    } catch {
        //A catch will be called. Name1 is not defined.
        //The outer scope cannot access the inner scope.
    }
    function sayHi() {
        console.log(name) //Lexical scoping allows the inner scope to access the outer scope
        let name1 = "Sebastian"
    }
    return sayHi;
}

let hi = greeting2();
hi();