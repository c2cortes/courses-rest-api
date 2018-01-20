const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/salamano-app', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	//Delete many
	// db.collection('course').deleteMany({ name:'Escolta' })
	// .then((result) => {
	// 	console.log(result)
	// }, (erro) => {
	// 	console.log('Couldnt')
	// });

	//Delete One
	// db.collection('course').deleteOne({ name: 'Escolta' })
	// .then((result) => {
	// 	console.log(result);
	// }, (erro) => {
	// 	console.log(erro);
	// })

	//Find and delete
	db.collection('course').findOneAndDelete({ _id: new ObjectID("5a6249e0e81c486c806fc668") })
	.then((result) => {
		console.log(result);
	}, (erro) => {
	// 	console.log(erro);
	});

});