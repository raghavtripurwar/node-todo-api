const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('connect to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	db.collection('Users').insertOne({
		name:'raghav',
		age:'19',
		location:'chandrapur'
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert Users',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});

	db.close();
});