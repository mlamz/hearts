var express = require('express')
,	nowjs = require('now')
,	homeController = require('./controllers/homeController')
,	port = process.env.PORT || 3000;

var app = express.createServer();

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

app.get('/', function(request, response){
	homeController.index(request,response);
});

app.listen(port);
console.log("listening on port " + port);