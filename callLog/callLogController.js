var callLogModel = require('./callLogModel');

var createCallLog = function(req, res) {
    var newLog = new callLogModel(req.body);
    newLog.save(function(err, result) {
        if (err) res.send({ "meswsage": "connot log" });
        else res.send(result);
    })
}

var getCallLogs = function(req, res) {
    callLogModel.find(function(err, result) {
        if (err) res.send({ "meswsage": "connot get logs" });
        else res.send(result);
    })
}

var removeLog = function(req, res) {
    var _id = req.body._id
    callLogModel.findByIdAndRemove({ _id }, function(err, result) {
        if (err) res.send({ "meswsage": "connot delete" });
        else res.send({ "meswsage": " deleted" });
    })
}


module.exports = {
    createCallLog: createCallLog,
    getCallLogs: getCallLogs,
    removeLog: removeLog,

}