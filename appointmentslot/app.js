var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var mongodb = require('mongodb');
Appointment = require('./model/appointment.js');
var fs = require('fs');
var filename = './model/appointment.json';
var config = require('./model/appointment.json');


//connect to Mongoose
//mongoose.connect('mongodb://localhost/appointment');
//var db = mongoose.connection;

//Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Please use /api/appointment');

});
app.get('/api/appointment', function (req, res) {
    //var appointmentMock = {
    //    "name": "sonu",
    //    "phone": "343455"
    //}
   
    //res.json(appointmentMock);
    res.json(config);
});
app.get('/api/appointment/save', function (req, res) {

    var appointmentMock = {
        "date": "12/08/2017",
        "time": "12:00am",
        "name": "pramit",
        "phone": "123456789",
        "status": "true"
    }
   
    //config.date = "12/08/2017";
    //config.time = "10:00pm";
    //config.name = "Pramit";
    //config.phone = "";
    //config.status = "";

    var json = JSON.stringify(appointmentMock);
    fs.appendFile(filename, json,'utf8', function (err) {
        if (err) return console.log(err);

        console.log('writing to ' + filename);
    });

    res.json(config);
});

app.post('/api/appointment/add', function (req, res) {
   
    var dataReceived = JSON.stringify(req.body);
    fs.writeFile(filename, dataReceived);
    console.log(req.body);
    //var obj = config;
    //fs.readFile(filename, 'utf8', function readFileCallback(err, data) {
    //    if (err) {
    //        console.log(err);
    //    } else {
    //        json = JSON.stringify(obj); //convert it back to json
    //        fs.writeFile(filename, json, 'utf8'); // write it back 
    //        res.json(json);
    //    }
    //});
});

app.listen(8080);
console.log('Running on port 8080');


