//Let's create a Web Server in Node.js (VERY BASIC VERSION)
const http = require('http');
const PORT = 8080;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('My First Web Server in Node.js');
})
.listen(PORT, 'localhost', () => console.log(`Server is running on PORT: ${PORT}`));
