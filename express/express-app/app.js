const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

/****MIDDLEWARE TO USE PUBLIC DIR****/
app.use('/assets', express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.use('/', (req, res, next) => {
    console.log("Request Url: " + req.url);
    next();
});

htmlController(app);
apiController(app);

app.listen(PORT, () => {
    `Server running on PORT: ${PORT}`;
});