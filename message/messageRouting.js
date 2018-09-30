var express = require('express');

var messageRouting = express.Router();

var messageController = require('./messageController');

messageRouting.route('/createMessage').post(messageController.createMessage);
messageRouting.route('/findMessages').post(messageController.findMessages);

module.exports = messageRouting;