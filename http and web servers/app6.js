//ROUTING IN NODE
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index3.html').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const obj = {
            firstname: 'John',
            lastname: 'Doe'
        }
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 ERROR PAGE');
    }
})
    .listen(1337, '127.0.0.1');