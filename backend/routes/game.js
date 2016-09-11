/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();
var game_schema = require('./../models/game');
var game_model = require('mongoose').model(game_schema.name, game_schema.schema);
var request = require('unirest');

router.get('/game', function(req, res, next){
    if(req.query && req.query.search){
        var query = req.query.search;
        request.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=5&offset=0&search=" + query)
            .header("X-Mashape-Key", "lm8ICvaR3BmshOQ5Bpw2kS9b4SzYp1LtsCdjsnc74txWct4LAB")
            .header("Accept", "application/json")
            .end(function (result) {
                if(result.status == 200){
                    console.log(result.body);
                    res.send(result.body);
                }
            });
    }
});

router.get('/:gameName/exists', function(req, res, next){
    var game_name = req.params.gameName;
    console.log(game_name);

    game_model.findOne({ name: game_name }, function(error, game){
        console.log('error ' + JSON.stringify(error));
        console.log('game ' + JSON.stringify(game));
       if(!error) {
           res.send(game);
       } else {
           res.send(error);
       }
    });
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