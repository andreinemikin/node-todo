var mongoose = new require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/TodoApp', {
    useMongoClient: true,
    /* other options */
});

module.exports = {
    mongoose
};