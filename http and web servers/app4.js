//Same server as app3.js using stream and pipe
//it is a matter of performance
const http = require('http');
const fs = require('fs'); //to render a html file we need to require the file module
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //here we are creating a dinamic template
    fs.createReadStream(__dirname + '/index2.html').pipe(res);

})
    .listen(1337, '127.0.0.1');