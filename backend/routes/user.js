/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();

router.get('/user', function(req, res, next){
    res.send('User!');
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