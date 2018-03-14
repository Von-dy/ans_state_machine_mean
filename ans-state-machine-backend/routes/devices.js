var express = require('express');
var mongoose = require('mongoose');

var Device = require('../models/Device');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/allDevices', function(req, res, next) {
    mongoose.connection.collection('devices').find().toArray(
        function(err, results){
            res.send(results);
        });
});

router.get('/getDevices', function(req, res, next) {
    var searchQuery = {};

    if(req.query.host_name)
        searchQuery = { host_name: req.query.host_name };

    Device.find(searchQuery, function(err, devices) {
        if (err) {
            res.status(400);
            res.send();
        }

        console.log("returning all the users.");
        res.send(devices);
    })
});

router.post('/insertDevice', function(req, res, next) {
   var newDevice = new Device(req.body);
   newDevice._id = mongoose.Types.ObjectId();

   newDevice.save(function(err) {
       if (err) {
           console.log("not saved!");
           res.status(400);
           res.send();
       }
       console.log("saved!");
       res.send({ id : newDevice._id });
   });
});

router.post('/removeDevice', function(req, res, next) {
    Device.remove({_id : req.body.id }, function(err) {
        if (err) {
            console.log("not removed!");
            res.status(400);
            res.send();
        }
        console.log("removed!");
        res.send({status: 'ok'});
    })
});

module.exports = router;