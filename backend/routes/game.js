/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();
var game_schema = require('./../models/game');
var object_id = require('mongoose').mongo.ObjectId;
var game_model = require('mongoose').model(game_schema.name, game_schema.schema);

router.get('/games', function(req, res, next){

});

router.get('/game/:gameId', function(req, res, next){
    game_model.findById(req.params.gameId, function(error, game){
       if(!error){
           res.send(game);
       } else {
           res.send(error);
       }
    });
});

router.put('/game/:gameId', function(req, res, next){
    var options = {
        new: true,
    };

    if(req.body && req.body.author){
        var update_params = {
            $push: { "reviews" : req.body.author }
        };
        game_model.findByIdAndUpdate(req.params.gameId, update_params, options, function(error, game){
           if(!error){
               res.send(game);
           } else {
               res.send(error);
           }
        });
    }
});

router.post('/game', function(req, res, next){
    var options = {};
    
    if(req.body){
        options.name = req.body.name;
        options.genre = req.body.genre;
        options.picture = req.body.picture;
        options.reviews = req.body.review;

        game_model.create(options, function(error, game){
            if(!error){
                res.send(game);
            } else {
                res.send(error);
            }
        });
    }
});

module.exports = router;