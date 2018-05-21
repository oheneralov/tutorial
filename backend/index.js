var express = require('express');
var tutorial = require('./tutorialdb');

var app = express();
app.use(express.static('../build'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
	
});

app.get('/backend/administrator', function(req, res){
	res.send('administrator');
	
});

app.get('/backend/leftmenu', function(req, res){
	//read data from mongodb and return the result
	var db = new tutorial.TutorialDB();
	//res.type('json'); 
	db.getMenuItems(function(err, result) {
          if (err) throw err;
          //console.log(result);
          console.log(result);
	      res.json(JSON.stringify(result));
		  
        });
	
});

app.get('/backend/content/:id', function(req, res){
	//read data from mongodb and return the result
	var id = req.params.id;
	var db = new tutorial.TutorialDB();
	db.getContentByMenu(id, function(err, result) {
          if (err) throw err;
          console.log(result);
		  res.json(JSON.stringify(result));
        });
	
});

try{
    app.listen(8081);
}
catch(e){
	console.log(e.message);
}