//COMMON MODULE PATTERNS IN NODE.JS
const greet = require('./greet1')
greet();

const greet2 = require('./greet2').greet;//here we are getting a particular method of exports object
greet2();

const greet3 = require('./greet3');
greet3.greet();
//NOTE: this is not good, let's look to greet4 for a better solution
greet3.greeting = 'Changed Hello World!';

const greet3b = require('./greet3');
greet3b.greet();
greet3.greet();

const  Greet4 = require('./greet4'); //it is now a constructor function!
const grtr = new Greet4();
grtr.greet();

const greet5 = require('./greet5').greet;
greet5();