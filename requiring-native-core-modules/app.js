//util.js is just a utilities file in the core of Node
const util = require('util');

const name = 'Giulio Cesare';
const greeting = util.format('Hello, %s', name);
util.log(greeting);