const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/salamano-app', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	db.collection('course').insertOne(
		{
			name: 'Vigilancia',
			type: 1,
			has_date: 1
		}, (err, result) => {
			if(err){
				return console.log('Unable to insert the register', err);
			}

			console.log(JSON.stringify(result.ops, undefined, 2));
		}
	);

	db.close();
});