var express = require('express');
var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;

// router.get('/list', function(req, res) {
// 	console.log("body");
// 	var url = 'mongodb://localhost/comments';

// 	MongoClient.connect(url, function(err, db) {
// 		db.collection('commentsData').find({}).toArray(function(err, result) {
// 		    if( err ) callback(err);

// 		    res.render("index", {
// 		        data: result,
// 		    });
// 		});
// 	});
// });

router.get('/list', function(req, res) {
	console.log("body");
	const MongoClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://gautamg485:5rodM7RLKr2Qmmos@userdetails-pbbgp.mongodb.net/test?retryWrites=true';
	MongoClient.connect(uri, function(err, client) {
		if(err) {
			console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
		}
		console.log('Connected...');
		const collection = client.db("userData").collection("userData");
		// perform actions on the collection object
		collection.find({}).toArray(function(err, result) {
		    if( err ) callback(err);

		    res.render("index", {
		        data: result,
		    });
		});
		client.close();
	});
});

module.exports = router;