/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();
var review_scehema = require('./../models/review');
var review_model = require('mongoose').model(review_scehema.name, review_scehema.schema);

router.get('/review/:reviewId', function(req, res, next){
    review_model.findById(req.params.reviewId, function(error, review){
       if(!error){
           res.send(review);
       } else {
           res.send(error);
       }
    });
});

router.post('/review', function(req, res, next){
    var options = {
        text: req.body.text,
        rating: req.body.rating,
    };
    review_model.create(options, function(error, review){
        if(!error){
            res.sendStatus(201);
        } else {
            res.send(error);
        }
    });
});

router.delete('/review/:reviewId', function(req, res, next){
    review_model.findByIdAndRemove(req.params.reviewId, function(error, review){
        if(!error){
            res.sendStatus(200);
        } else {
            res.send(error)
        }
    });
});

module.exports = router;