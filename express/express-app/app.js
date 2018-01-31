const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/****MIDDLEWARE TO USE PUBLIC DIR****/
app.use('/assets', express.static(__dirname + '/public'));

/*ROUTING*/
app.get('/', (req, res) => {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World</h1></body></html>');
});

app.get('/person/:id', (req, res) => {
    res.send(`Hello: ${req.params.id}`);
});

app.get('/api', (req, res) => {
    res.json({name: 'John', lastname: 'Doe'});
});

app.listen(PORT, () => {
    `Server running on PORT: ${PORT}`;
});