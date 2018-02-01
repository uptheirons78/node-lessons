const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

module.exports = function(app) {
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
}