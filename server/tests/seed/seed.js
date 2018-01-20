const {Todo} = new require('./../../models/todo');
const {User} = new require('./../../models/user');
const {ObjectID} = new require('mongodb');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const todos = [{
    _id: new ObjectID(),
    "text": "First test todos",
    _creator: userOneId
}, {
    _id: new ObjectID(),
    "text": "Second test todos",
    "completed": false,
    "completedAt": 333,
    _creator: userTwoId
}];

const users = [{
    _id: userOneId,
    email: 'andrei@exam.com',
    password: 'testpassOne',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
},{
    _id: userTwoId,
    email: 'andrei2@exam.com',
    password: 'testpassTwo',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
    }]
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done()).catch((err) => {
        done();
    });
};

module.exports = {todos, populateTodos, users, populateUsers};