const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (error, client) => {
    var db = client.db('Todo');
    if(error) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb server');
    //
    // db.collection('Users').insertOne({
    //     name: 'Andrei',
    //     age: 31,
    //     location: 'Ashkelon'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable insert user');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});