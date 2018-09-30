var mongoose = require('mongoose');

var Schema = mongoose.Schema

var contactsModel = new Schema({
    uid: String,
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String

});

module.exports = mongoose.model('contact', contactsModel)