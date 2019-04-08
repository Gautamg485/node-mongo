var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/list', function(req, res) {
	console.log("body");
	var url = 'mongodb://localhost/comments';

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