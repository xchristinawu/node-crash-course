// Module Wrapper Function
/*
( function (exports, require, module, __filename, __dirname) {
    // module code goes here (where your code runs)
})
*/

const Person = require('./person');

const person1 = new Person('Kenji', 5)

person1.greeting();