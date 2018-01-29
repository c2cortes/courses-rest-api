const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = "5a62edef9e6f3996b65e247b";

Todo.findOne({ 
	_id: id
}).then((todo) => {
	console.log(todo._id);
}, (erro) => {
	console.log(erro);
});