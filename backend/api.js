/**
 * Created by Joey on 9/10/2016.
 */

var MONGO_USER = 'testuser';
var MONGO_PASS = 'testpass';
var MONGODB_URI = "mongodb://" + MONGO_USER + ":" + MONGO_PASS + "@ds029496.mlab.com:29496/garbagegames";

module.exports = function setup_api(mongoose) {
    mongoose.connect(MONGODB_URI, function (error) {
        if (error) {
            console.log('Error connecting to Mongodb at URI: ' + MONGODB_URI);
        }
    });
};