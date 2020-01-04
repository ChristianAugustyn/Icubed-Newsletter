const express = require('express');
const bp = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bp.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

