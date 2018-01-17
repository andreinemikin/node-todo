var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = new require('mongodb');

var {mongoose} = new require('./db/mongoose');
var {Todo} = new require('./models/todo');
var {User} = new require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todos) => {
        if(!todos) {
            return res.status(404).send();
        }
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.listen(3000, () => {
    console.log('Start on port 3000');
});

module.exports = {app};