var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

console.log("req1222");

router.post('/save', function(req, res) {
	var url = 'mongodb://localhost/comments';

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var myobj = { name: req.body.name, shopname: req.body.shopname, status: req.body.status };
		db.collection("commentsData").insertOne(myobj, function(err, res) {
			if (err) throw err;
		});
	});
	res.status(200).send({ status: "success" });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
