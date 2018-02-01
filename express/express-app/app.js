const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/****MIDDLEWARE TO USE PUBLIC DIR****/
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

/*ROUTING*/
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id });
});

app.get('/api', (req, res) => {
    res.json({name: 'John', lastname: 'Doe'});
});

app.listen(PORT, () => {
    `Server running on PORT: ${PORT}`;
});