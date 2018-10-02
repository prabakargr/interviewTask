var messageModel = require('./messageModel');

var createMessage = function(req, res) {
    var newMsg = new messageModel(req.body);
    newMsg.save(function(err, result) {
        if (err) res.send({ "message": "cannot create" });
        else res.send(result);
    })
}

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
    createMessage: createMessage,
    findMessages: findMessages,
    getMessages: getMessages
}