const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (error, client) => {
    var db = client.db('Todo');
    if(error) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb server');
    //
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
    //     console.log(res);
    // })
    //
    // db.collection('Todos').deleteOne({text: 'Wash car'}).then((res) => {
    //     console.log(res);
    // })

    // db.collection('Todos').findOneAndDelete({text: 'Wash car'}).then((res) => {
    //     console.log(res);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a59c908155576f39fbde659")}).then((res) => {
        console.log(res);
    })


    // client.close();
});