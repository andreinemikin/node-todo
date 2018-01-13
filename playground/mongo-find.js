const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (error, client) => {
    var db = client.db('Todo');
    if(error) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb server');

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos: ', count);
    }, (err) => {
        console.log('Error')
    });

    // client.close();
});