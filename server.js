
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var tableArray = require('./tables.js');

var htmlRoutes = require('./routes/htmlRoutes.js');

var app = express();
var PORT = process.env.PORT || 3000;

//Routes of html 
htmlRoutes(app)

//Routes of api

//listening
app.listen(PORT, function () {
    console.log(`Listening on: ${PORT}`)
});



