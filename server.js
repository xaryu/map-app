/**
 * Created by paulsuceveanu on 08/02/16.
 */

var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

//setting up mongoDB
mongoose.connect("mongodb://localhost/meanMapApp");

//logging and parsing
app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

require('./server/routes.js')(app);

app.listen(port);
console.log("App listening on port: " + port);