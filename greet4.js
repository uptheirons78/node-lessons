function Greetr() {
    this.greeting = 'Hello World!!!';
    this.greet = function () {
        console.log(this.greeting);
    }
}

//this way exports give the ability to create a new Greetr Object
//Done to avoid references
module.exports = Greetr;