/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();

router.get('/review', function(req, res, next){
    res.send('Review!');
});

router.put('', function(req, res, next){
    next();
});

router.post('', function(req, res, next){
    next();
});

router.delete('', function(req, res, next){
    next();
});

module.exports = router;