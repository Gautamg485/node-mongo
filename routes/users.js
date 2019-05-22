var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

console.log("req1222");

// router.post('/save', function(req, res) {
// 	var url = 'mongodb://localhost/comments';

// 	MongoClient.connect(url, function(err, db) {
// 		if (err) throw err;
// 		var myobj = { name: req.body.name, shopname: req.body.shopname, status: req.body.status };
// 		db.collection("commentsData").insertOne(myobj, function(err, res) {
// 			if (err) throw err;
// 		});
// 	});
// 	res.status(200).send({ status: "success" });
// });

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/save', function(req, res) {
	console.log("bodydatadata");
	const MongoClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://gautamg485:5rodM7RLKr2Qmmos@userdetails-pbbgp.mongodb.net/test?retryWrites=true';
	MongoClient.connect(uri, function(err, client) {
		if(err) {
			console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
		}
		console.log('Connected...');
		var myobj = { name: req.body.name, shopname: req.body.shopname, status: req.body.status };
		const collection = client.db("userData").collection("userData");
		// perform actions on the collection object
		collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
		});
		client.close();
		res.status(200).send({ status: "success" });
	});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
