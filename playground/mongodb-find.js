const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/salamano-app', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	db.collection('course').find({type: 1}).toArray().then(
		(docs) => {
			console.log(JSON.stringify(docs, undefined, 2))
		}, (err) => {
			console.log('Unable to fetch todos', err)
		}
	);

});