var mongoose = new require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/TodoApp', {
    useMongoClient: true,
});

module.exports = {
    mongoose
};