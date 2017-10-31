var express = require('express');

var app = express();
app.use(express.static('../build'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
	
});

app.get('/backend/leftmenu', function(req, res){
	//read data from mongodb and return the result
	res.send(JSON.stringify(['0ne','two','three','four']));
	
});

app.get('/backend/content/:id', function(req, res){
	//read data from mongodb and return the result
	var id = req.params.id;
	res.send(JSON.stringify(id));
	
});

try{
    app.listen(8081);
}
catch(e){
	console.log(e.message);
}