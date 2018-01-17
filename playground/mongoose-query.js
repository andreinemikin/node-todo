const {ObjectID} = new require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = new require('./../server/models/todo');
const {User} = new require('./../server/models/user');

var id = '5a5dd56743687c071823e426';

// if(!ObjectID.isValid(id)) {
//     console.log('id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log(todo);
// }).catch((err) => {
//     console.log(err);
// });


User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(user);
}).catch((err) => {
    console.log(err);
});