//ES6 TYPED ARRAYS
const buffer = new ArrayBuffer(8); //it stores 8 bytes
const view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);//Int32Array [ 5, 15 ]
