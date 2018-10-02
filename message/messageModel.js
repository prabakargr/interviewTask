var mongoose = require('mongoose');

var Schema = mongoose.Schema

var messageModel = new Schema({
    uid: String,
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    message: []

});

module.exports = mongoose.model('message', messageModel)