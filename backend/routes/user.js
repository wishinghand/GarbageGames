/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();
var user_schema = require('./../models/user');
var user_model = require('mongoose').model(user_schema.name, user_schema.schema);

router.get('/user/:userId', function(req, res, next){
    // find by ID and return just the JSON data by supplying lean()
    user_model.findById(req.params.userId, function(error, doc){
            if(!error){
                res.send(doc);
            }
        });
});

router.put('/user/:userId', function(req, res, next){
    var options = {};
    // find user by ID and update info
    // TODO: extract info from put into options object to update document
    if(req.body){
        console.log(req.body);
        if(req.body.name){
            options.name = req.body.name;
        }
        if(req.body.password){
            options.password = req.body.password;
        }
        user_model.findByIdAndUpdate(req.params.userId, options, function(error, doc){
            if(!error){
                res.send(doc);
            } else {
                res.send(error);
            }
        });
    } else {
        res.send('No body!');
    }
});

router.post('/user', function(req, res, next){
    console.log(req.body);

    var user_info = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    user_model.create(user_info, function(error, user){
       if(!error){
           res.sendStatus(200);
       } else {
           res.send(error);
       }
    });
});

router.delete('/user/:userId', function(req, res, next){
    user_model.findByIdAndRemove(req.params.userId, function(error, user){
       if(!error){
           res.sendStatus(200);
       } else {
           res.send(error);
       }
    });
});

module.exports = router;