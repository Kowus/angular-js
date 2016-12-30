var port = 3000;
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Gem = require('./Gems.model');

var db = 'mongodb://localhost/gemstore';

mongoose.connect(db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
// Add headers
app.use(function (req, res, next) {
	
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', false);
	
	// Pass to next layer of middleware
	next();
});

app.get('/', function (req, res) {
	console.log('go to localhost:3000/gems');
	
	res.send('go to localhost:3000/gems')
});





// Show all books without the object id
app.get('/gems', function (req, res) {
	console.log('getting all gems');
	Gem.find({}, { _id: 0, __v: 0 }).exec(function (err, results) {
		if ( err ) {
			res.send('an error has occurred' + err);
		}
		else {
			console.log(results);
			res.json(results);
		}
	});
});




app.listen(port, function () {
	console.log('listening on localhost: ' + port);
});
