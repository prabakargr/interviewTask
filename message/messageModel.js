var mongoose = require('mongoose');

var Schema = mongoose.Schema

var messageModel = new Schema({
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    dateTime: String,
    message: String

});

module.exports = mongoose.model('message', messageModel)