'use strict';

var express = require('express'),
	//locale = require('express-locale'),
	// useragent = require('express-useragent'),
	routes = require('./app/routes/index.js');	
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/public', express.static(process.cwd() + '/public'));
// app.use(useragent.express());

routes(app);


app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));	
});

