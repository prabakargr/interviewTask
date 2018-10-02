var express = require('express');

var messageRouting = express.Router();

var messageController = require('./messageController');


messageRouting.route('/findMessages').post(messageController.findMessages);
messageRouting.route('/getMessages').get(messageController.getMessages);

module.exports = messageRouting;