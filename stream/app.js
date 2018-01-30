const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/greet.txt');

readable.on('data', function(chunk) {
    console.log(chunk); //<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 63 72 61 73 20 61 6d 65 74 2e ... >

 });

const readable2 = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8'});

readable2.on('data', function(chunk) {
    // console.log(chunk); //Lorem ipsum .... (the entire text file)
    console.log(chunk.length); //20118
 });

const readable3 = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});
const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable3.on('data', function(chunk) {
    console.log(chunk); //
    console.log(chunk.length); //16384 ... 3734
    writable.write(chunk);
 });


