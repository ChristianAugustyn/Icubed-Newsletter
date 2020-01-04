const express = require('express');
const bp = require('body-parser');
const jquery = require('jquery');
const port = 3000;
const app = express();

app.use(express.static('public'));

app.use(bp.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.listen(port, function() {
    console.log('Server is running on port ' + port);
    console.log(__dirname);
});