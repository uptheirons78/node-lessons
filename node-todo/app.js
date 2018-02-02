const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const PORT = process.env.PORT || 3000;
const setupController = require('./controllers/setupControllers');
const apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});