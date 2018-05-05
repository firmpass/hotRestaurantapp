
var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');
var tableArray = require ('./tableArray');

var app = express();
var PORT = process.env.PORT || 3000;

//listening
app.listen(PORT, function () {
    console.log(`Listenting on: ${PORT}`)
});


