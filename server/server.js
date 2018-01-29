const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Project } = require('./models/project');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

////////***  Todos Routes  ***/////////

app.post('/todos', (req, res) => {
	var todo = new Todo({
		name: req.body.name,
		project_id: req.body.project_id
	});

	todo.save().
	then((doc) => {
		res.send(doc);
	}, (erro) => {
		res.status(400).send(erro);
	});
});

app.get('/todos/:project_id', (req, res) => {
	Todo.find({ project_id: req.params.project_id })
	.sort({ _id: -1 })
	.then((todos) => {
		res.send(todos)
	}, (e) => {
		res.send(e);
	})
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo) {
			return res.status(404).send();
		}

		return res.send(todo);
	}).catch((e) => {
		res.status(400).send();
	});
});

app.put('/todos/:id', (req, res) => {
	const id = req.params.id;
	const body = _.pick(req.body, ['elapsedSeconds', 'onGoing']);

	Todo.update({_id: id}, body)
	.then((doc) => {
		res.send(doc);
	}, (erro) => {
		res.send(erro);
	})
});

////////***  Projects Routes  ***/////////

app.post('/projects', (req, res) => {
	var project = new Project({
		name: req.body.name
	});

	project.save().
	then((doc) => {
		res.send(doc);
	}, (erro) => {
		res.status(400).send(erro);
	});
});

app.get('/projects', (req, res) => {
	Project.find()
	.sort({ _id: -1 })
	.then((projects) => {
		res.send(projects)
	}, (e) => {
		res.send(e);
	})
});

///////******///////

app.listen(3000, () => {
	console.log('Listening port 3000');
});