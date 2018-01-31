const http = require('http');
const fs = require('fs'); //to render a html file we need to require the file module
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //here we are creating a dinamic template
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    const message = 'Hello World...';
    html = html.replace('{Message}', message);
    res.end(html);
})
.listen(1337, '127.0.0.1');