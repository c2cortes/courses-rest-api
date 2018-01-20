const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/salamano-app', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	db.collection('course').findOneAndUpdate({
		_id: ObjectID("5a6249e0e81c486c806fc667")
	}, {
		$set:{
			name: 'Guarda'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	}, (erro) => {
		console.log(erro);
	})

});