var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

//DB connection

var db = mongoose.connect("mongodb://task:task12@ds125841.mlab.com:25841/task1", { useNewUrlParser: true });


// Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,application/json, Accept,x-access-token");
    next();
});

//imports 

var contactRouting = require('./contacts/contactsRouting');
var callLogRouting = require('./callLog/callLogRouting');
var messageRouting = require('./message/messageRouting')


//Routing

app.use('/contact', contactRouting);
app.use('/callLog', callLogRouting);
app.use('/message', messageRouting);






var port = process.env.PORT || 4000;

app.listen(port, () => console.log('Running on localhost:4000'))