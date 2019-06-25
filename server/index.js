var express = require('express');
var bodyParser = require('body-parser');

var massive = require('massive');


require('dotenv').config({path: __dirname + '/.env'});

// var profileController = require('./profileController');

var app = express();

//MASSIVE

//BodyParser
app.use(bodyParser.json());

//ENDPOINTS
// app.get(`profileInfo`, profileController.getProfileInfo)

var Port = 4545;

app.listen(Port, () => {
    console.log(`The server is listening on port ${Port}`)
});
