/**
 * Created by Joey on 9/10/2016.
 */

var router = require('express').Router();

router.use(require('./game'));
router.use(require('./review'));
router.use(require('./user'));

module.exports = router;