const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (error, client) => {
    var db = client.db('Todo');
    if(error) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a59cb53baf7e7f3b7b2486c')
    }, {
        $set: {
            name: 'Julia'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    // client.close();
});