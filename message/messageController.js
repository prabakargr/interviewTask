var messageModel = require('./messageModel');


var findMessages = function(req, res) {
    var mobileNumber = req.body.mobileNumber
    messageModel.find({ mobileNumber }, function(err, result) {
        if (err) res.send({ "message": "cannot get" });
        else res.send(result);
    })
}

var getMessages = function(req, res) {
    messageModel.find(function(err, result) {
        if (err) res.send({ "message": "cannot get" });
        else res.send(result);
    })
}
module.exports = {
    findMessages: findMessages,
    getMessages: getMessages
}