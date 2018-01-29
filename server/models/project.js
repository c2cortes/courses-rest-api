var mongoose = require('mongoose');

var Project = mongoose.model('Project', {
	name:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	user:{
		type: String,
		required: true,
		minLength: 1,
		trim: true,
		default: '123'
	},
	created_at:{
		type: Number,
		require: true,
		default: 0
	}
});

module.exports = { Project };