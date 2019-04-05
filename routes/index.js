var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res) {
	console.log("body");
	console.log(req.query.name);
	var url = 'mongodb://localhost/comments';

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var myobj = { name: req.query.name, shopname: req.query.shopname, status: req.query.status };
		db.collection("commentsData").insertOne(myobj, function(err, res) {
			if (err) throw err;
		});
	});

	MongoClient.connect(url, function(err, db) {
		db.collection('commentsData').find({}).toArray(function(err, result) {
		    if( err ) callback(err);

		    res.render("index", {
		        data: result,
		    });
		});
	});
});

module.exports = router;