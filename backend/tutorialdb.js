class TutorialDB{
	constructor(){
	  this.MongoClient = require('mongodb').MongoClient;
      this.url = "mongodb://192.168.56.101:27017/tutorial";
	}

    getContentByMenu(menuItem, callback){
        this.MongoClient.connect(this.url, function(err, db) {
        if (err) throw err;
        var query = { menu: menuItem};
        db.collection("content").find(query).toArray(callback);
      });
	}	
	
	getMenuItems(callback){
        this.MongoClient.connect(this.url, function(err, db) {
        if (err) throw err;
        var query = {};
		db.collection("content").find(query, {_id:false, content: false}).toArray(callback);
      });
	}	

}

exports.TutorialDB = TutorialDB;