const fs = require('fs'); //you are requiring an obj from Node Core

//sync approach
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet); //Hello World

//async approach
const greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data) {
    //callback body
    if(err) {
        console.log(err);
    } else {
        console.log(data);//<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
    }
});
const greet3 = fs.readFile(__dirname + '/greet.txt','utf8', function(err, data) {
    //callback body
    if(err) {
        console.log(err);
    } else {
        console.log(data);//Hello World
    }
});

console.log('Done!');
