/**
 * Render the html for the home page
 */
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

// create "middleware"
var logger = morgan('combined');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('../client/public'));

app.listen(3000, function() {
  console.log('Server is running on port 3000!');
});
