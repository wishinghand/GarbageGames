/**
 * Created by Joey on 9/10/2016.
 */

var schema = require('mongoose').Schema;

module.exports = {
    name: 'Game',
    schema: new schema({
        name: { type: String },
        genre: { type: String },
        reviews: [schema.Types.ObjectId],
        picture: { type: String },
    }),
};