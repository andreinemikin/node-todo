var mongoose = new require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/TodoApp');

module.exports = {
    mongoose
};