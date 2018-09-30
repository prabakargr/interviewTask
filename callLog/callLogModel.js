var mongoose = require('mongoose');

var Schema = mongoose.Schema

var callLogModel = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    typeOfCall: String,
    dateTime: String

});

module.exports = mongoose.model('callLog', callLogModel)