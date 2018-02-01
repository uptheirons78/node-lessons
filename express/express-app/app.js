const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

/****MIDDLEWARE TO USE PUBLIC DIR****/
app.use('/assets', express.static(__dirname + '/public'));
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

/*ROUTING*/
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id });
});

app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thank You!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});
app.post('/personjson', jsonParser, (req, res) => {
    res.send('Thank You for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', (req, res) => {
    res.json({name: 'John', lastname: 'Doe'});
});

app.listen(PORT, () => {
    `Server running on PORT: ${PORT}`;
});