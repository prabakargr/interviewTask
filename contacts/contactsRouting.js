var express = require('express');

var contactsRouting = express.Router();

var contactsController = require('./contactsController');

contactsRouting.route('/createContact').post(contactsController.createContact);
contactsRouting.route('/getContacts').get(contactsController.getContacts);
contactsRouting.route('/editContact').post(contactsController.editContact);
contactsRouting.route('/deleteContact').post(contactsController.deleteContact);


module.exports = contactsRouting;