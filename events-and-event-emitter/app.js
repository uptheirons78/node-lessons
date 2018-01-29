//EVENT
//something that has happened in our app that we can respond to
//Only two kinds of events in Node.js:
//System Events(C++ Core --- libuv) and Custom Events(Javascript Core --- Event Emitter)
//Event Emitter is where we have custom events

const Emitter = require('./emitter');

const emtr = new Emitter();
emtr.on('greet', function() {
    console.log('Somewhere, someone said Hello');
});

emtr.on('greet', function() {
    console.log('A greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');


