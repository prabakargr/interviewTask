var express = require('express');

var callLogsRouting = express.Router();

var callLogController = require('./callLogController');

callLogsRouting.route('/createLog').post(callLogController.createCallLog);
callLogsRouting.route('/getCalls').get(callLogController.getCallLogs);
callLogsRouting.route('/removeCall').post(callLogController.removeLog);



module.exports = callLogsRouting;