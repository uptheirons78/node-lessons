//Another Web Server
const http = require('http');
const PORT = 8080;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/plain' })
    res.end(`This is another Web Server created with Node.js`)
})
.listen(PORT, '127.0.0.1', () => console.log(`Server is running on PORT: ${PORT}`));