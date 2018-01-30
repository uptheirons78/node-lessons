//A global feature given us by Node.js Core
const buf = new Buffer('Hello', 'utf8'); //utf8 is the default char encoding
console.log(buf); //<Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); //Hello
//it is possible to convert it in JSON format (with UNICODE characters)
console.log(buf.toJSON());//{ type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
//it is possible to use it as an Array
console.log(buf[2]); //108

//it is possible to write in the buffer
buf.write('wo');
console.log(buf.toString());//wollo

