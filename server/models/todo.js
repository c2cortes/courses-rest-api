var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	name:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	onGoing:{
		type: Boolean,
		default: false
	},
	elapsedSeconds:{
		type: Number,
		require: true,
		default: 0
	},
	created_at:{
		type: Number,
		require: true,
		default: 0
	},
	project_id:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	}
});

module.exports = { Todo };