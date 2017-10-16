var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/leftmenu', function(req, res){
	//read data from mongodb and return the result
	res.send('lefttmenu');
	
});

app.listen(8080);