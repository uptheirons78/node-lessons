const greeting = 'Hello World!!!!';

function greet() {
    console.log(greeting);
}

//REVEALING MODULE PATTERN
//exposing onlu properties and methods you want, via a returned object
module.exports = {
    greet: greet
}