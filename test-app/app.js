const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const people = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Jim Doe' }
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {serverPeople: people});
});
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
