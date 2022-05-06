const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryAppMongoose2');
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    title: String,
    author: String,
    image: String
});

const Bookdata = mongoose.model('bookdata', NewSchema);

module.exports = Bookdata;