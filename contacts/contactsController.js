var contactsModel = require('./contactModel');

var createContact = function(req, res) {
    var newContact = new contactsModel(req.body);
    newContact.save(function(err, result) {
        if (err) res.send({ "meswsage": "connot create" });
        else res.send(result);
    })
}

var getContacts = function(req, res) {
    contactsModel.find(function(err, result) {
        if (err) res.send({ "meswsage": "connot get contacts" });
        else res.send(result);
    })
}

var editContact = function(req, res) {
    var uid = req.body.uid;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var mobileNumber = req.body.mobileNumber;
    var email = req.body.mobileNumber
    contactsModel.findOneAndUpdate({ uid }, { firstName, lastName, mobileNumber, email }, function(err, result) {
        if (err) res.send({ "meswsage": "connot update" });
        else res.send({ "meswsage": " updated" });
    })
}

var deleteContact = function(req, res) {
    var uid = req.body.uid;

    contactsModel.findOneAndRemove({ uid }, function(err, result) {
        if (err) res.send({ "meswsage": "connot delete" });
        else res.send({ "meswsage": " Deleted" });
    })
}

module.exports = {
    createContact: createContact,
    getContacts: getContacts,
    editContact: editContact,
    deleteContact: deleteContact
}